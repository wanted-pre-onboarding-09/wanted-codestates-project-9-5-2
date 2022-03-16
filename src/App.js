import React, { useEffect, useRef, useState } from 'react';
import Search from './components/Search';
import { NetworkGraph } from './lib/NetworkGraph';

function App() {
  const canvasRef = useRef();
  const inputRef = useRef();
  const [user, setUser] = useState();
  const userRepogitoriesMap = useRef(new Map());

  let $graph;

  const onResize = () => {
    $graph.resize();
  };

  async function getStarredRepositories(nickname) {
    nickname = nickname.trim();
    if (!nickname) {
      return;
    }
    const user = await fetch(`https://api.github.com/users/${nickname}`).then(
      (r) => (r.status === 200 ? r.json() : Promise.resolve(null)),
    );
    if (!user) {
      alert('사용자를 찾을 수 없습니다.');
      inputRef.current.value = null;
      return;
    }
    const stars = await fetch(
      `https://api.github.com/users/${nickname}/starred?per_page=100`,
    ).then((r) => (r.status === 200 ? r.json() : Promise.resolve(null)));
    setUser(user);
    userRepogitoriesMap.current.set(user, stars ?? []);
  }

  useEffect(() => {
    console.log('graph에 노드랑 엣지 추가 시작');
    if (!$graph) {
      $graph = new NetworkGraph(canvasRef.current);
    }
    for (const [user, repos] of userRepogitoriesMap.current) {
      $graph.addNode({
        id: user.id,
        label: user.login,
        shape: 'circle',
        image: user.avatar_url,
        extra: null,
      });
      for (const repo of repos) {
        $graph.addNode({
          id: repo.id,
          label: repo.name,
          shape: 'text',
          extra: repo,
        });
        $graph.addEdge({
          source: user.id,
          target: repo.id,
        });
      }
    }
    console.log('graph에 노드랑 엣지 추가 끝');
  });

  useEffect(() => {
    console.log('레포지토리 노드 탐색 시작');
    if (!canvasRef.current.value) {
      return;
    }
    $graph = new NetworkGraph(canvasRef.current.value);
    $graph.on('click_node', (node) => {
      if (node.extra) {
        inputRef.current.value = null;
        getStarredRepositories(node.extra.owner.login); // userRepogitoriesMap => owner.login
      }
    });
    window.addEventListener('resize', onResize);
    console.log('레포지토리 노드 탐색 끝');
  }, []);

  useEffect(() => {
    return () => {
      $graph.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <>
      <Search
        getStarredRepositories={getStarredRepositories}
        inputRef={inputRef}
        user={user}
      />
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%' }}
      ></canvas>
    </>
  );
}

export default App;
