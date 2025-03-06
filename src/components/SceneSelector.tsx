import React from 'react';
import styles from './SceneSelector.module.css';
import type { Scene } from '../types/Scene';

import video0 from '../assets/videos/CHIA1.mp4'
import video1 from '../assets/videos/GAB1.mp4'
import video2 from '../assets/videos/FRA1.mp4'
import video3 from '../assets/videos/FRA2.mp4'
import video4 from '../assets/videos/TOMM1.mp4'
import video5 from '../assets/videos/GAB2.mp4'
import video6 from '../assets/videos/TOMM2.mp4'
import video7 from '../assets/videos/CHIA2.mp4'

import image0 from '../assets/images/CHIA1.png'
import image1 from '../assets/images/GAB1.png'
import image2 from '../assets/images/FRA1.png'
import image3 from '../assets/images/FRA2.png'
import image4 from '../assets/images/TOMM1.png'
import image5 from '../assets/images/GAB2.png'
import image6 from '../assets/images/TOMM2.png'
import image7 from '../assets/images/CHIA2.png'

interface SceneSelectorProps {
  onSelect: (scene: Scene) => void;
}

const exitScene: Scene = { id: 8, name: 'Exit', src: '', thumbnail: '' };   // to exit and go back to the home screen

const scenes: Scene[] = [
  { id: 1, name: 'Ek129-12.mp4', src: video0, thumbnail: image0 },
  { id: 2, name: 'a00.avi', src: video1, thumbnail: image1 },
  { id: 3, name: '?_.mov', src: video2, thumbnail: image2 },
  { id: 4, name: '77.avi', src: video3, thumbnail: image3 },
  { id: 5, name: '=-00.mpeg', src: video4, thumbnail: image4 },
  { id: 6, name: 'Ge029.mp4', src: video5, thumbnail: image5 },
  { id: 7, name: 'ijks.wmv', src: video6, thumbnail: image6 },
  { id: 8, name: '5__01.mp4', src: video7, thumbnail: image7 },
];

const SceneSelector: React.FC<SceneSelectorProps> = ({ onSelect }) => {

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {scenes.map((scene) => (
          <button
            key={scene.id}
            className={styles.button}
            onClick={() => { onSelect(scene) }}
          >
            <img
              className={styles.image}
              src={scene.thumbnail}
              alt={scene.name}
              style={{ width: '100%' }}
            />
            <text
              className={styles.text}
            >
              {scene.name}
            </text>
          </button>
        ))}
      </div>
      {/* exit button */}
      <button
        className={styles.exitButton}
        onClick={() => onSelect(exitScene)}
      >
        <text className={styles.exitText}>
          EXIT
        </text>
      </button>
    </div>
  );
};

export default SceneSelector;
