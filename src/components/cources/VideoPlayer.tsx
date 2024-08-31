// src/components/courses/VideoPlayer.tsx
'use client';

import React from 'react';
import ReactPlayer from 'react-player';
import styles from '../../styles/VideoPlayer.module.css';

interface VideoPlayerProps {
  videoUrl: string;
}

export default function VideoPlayer({ videoUrl }: VideoPlayerProps) {
  return (
    <div className={styles.playerWrapper}>
      <ReactPlayer
        url={videoUrl}
        controls
        width="100%"
        height="100%"
      />
    </div>
  );
}
