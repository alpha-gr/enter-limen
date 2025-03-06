import React, { useEffect, useState } from 'react';
import type { Scene } from '../types/Scene';
import styles from './SceneViewer.module.css'; // Adjust the path as needed

interface SceneViewerProps {
  scene: Scene;
  onBack: () => void;
  loop?: boolean;
}

const SceneViewer: React.FC<SceneViewerProps> = ({ scene, onBack, loop }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isFadingIn, setIsFadingIn] = useState(false);

  useEffect(() => {
    // Trigger fade-in on component mount
    setIsFadingIn(true);
  }, []);


  const handleVideoEnd = () => {
    setIsFadingOut(true);
    setTimeout(onBack, 1000); // Wait for the fade-out effect to complete
    // onBack()
  };

  return (
    <div className={styles.container}>
      <div className={styles.videoWrapper}>
        <video
          src={scene.src}
          controls={true}
          autoPlay
          onEnded={handleVideoEnd}
          className={isFadingOut ? styles.fadeOut : isFadingIn ? styles.fadeIn : ''}
          loop={loop}
        />
        <button
          onClick={handleVideoEnd}
          className={styles.backButton}
        />
      </div>
    </div>
  );
};

export default SceneViewer;