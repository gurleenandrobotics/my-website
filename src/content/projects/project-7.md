---
title: 'Adaptive Cruise Control — MATLAB Sensor Data Analysis'
description: 'Developed MATLAB algorithms to preprocess, smooth, and analyze large experimental sensor datasets for adaptive cruise control (ACC) systems, reducing noise and identifying performance trends.'
publishDate: 'Jan 01 2025'
seo:
  image:
    src: '../../assets/images/project-7.jpg'
    alt: Adaptive cruise control MATLAB project
---

![Adaptive cruise control sensor analysis](../../assets/images/project-7.jpg)

## Overview

A **MATLAB-based data analysis project** focused on preprocessing and interpreting large experimental sensor datasets to characterize and improve **Adaptive Cruise Control (ACC)** system performance.

## What I Built

### Data Preprocessing Pipeline
- Ingested raw sensor time-series data from ACC test runs (radar, LiDAR, speed sensors).
- Applied **smoothing filters** (moving average, Savitzky-Golay) to reduce high-frequency noise while preserving meaningful dynamics.
- Handled missing data, sensor dropouts, and timestamp misalignment across multi-sensor logs.

### Performance Analysis
- Developed MATLAB scripts to compute key ACC metrics: following distance error, response latency, and deceleration profiles.
- Identified performance trends across different speed regimes and traffic scenarios.
- Generated visualization plots (time-domain, frequency-domain) to surface insights for the engineering team.

### Noise Reduction Methods
- Benchmarked multiple filter designs for noise suppression vs. signal lag tradeoffs.
- Documented findings to support algorithm tuning decisions.

## Tools & Skills

`MATLAB` · `Signal Processing` · `Data Preprocessing` · `Time-Series Analysis` · `Control Systems` · `Sensor Fusion Concepts`

## Why It Matters

ACC systems sit at the intersection of control theory and real-world sensor noise — this project built intuition for how messy data translates into safety-critical decisions in autonomous vehicles.
