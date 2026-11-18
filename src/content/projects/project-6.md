---
title: 'Analog Audio Equalizer — Hardware Design'
description: 'Designed and built a fully analog audio equalizer using bass, treble, and band-pass op-amp filter stages, summing amplifier, and crossover network for speaker output.'
publishDate: 'Jan 01 2025'
seo:
  image:
    src: '../../assets/images/project-6.jpg'
    alt: Analog audio equalizer hardware project
---

![Analog audio equalizer](../../assets/images/project-6.jpg)

## Overview

A from-scratch **analog audio equalizer** designed and physically built in 2025. The project demonstrates hands-on circuit design skills — from filter theory to soldering a working audio system.

## Circuit Architecture

The equalizer is split into three main signal-processing stages:

### 1. Frequency-Band Filters
- **Bass filter:** Low-pass op-amp filter to isolate low-frequency content.
- **Treble filter:** High-pass op-amp filter for high-frequency content.
- **Band-pass filter:** Mid-range filter combining high-pass and low-pass stages.

### 2. Op-Amp Summing & Amplification
- Each band feeds into a **summing amplifier** that blends the three EQ channels with adjustable gain per band.
- Final amplification stage drives enough power for speaker output.

### 3. Signal Reconstruction & Crossover Network
- Reconstructed signal is passed through a **crossover network** to route frequency bands to appropriate speaker drivers (woofer / tweeter).

## Tools & Skills Demonstrated

`Op-Amp Circuit Design` · `Filter Theory (Butterworth)` · `LTSpice Simulation` · `PCB/Protoboard Assembly` · `Signal Analysis` · `Oscilloscope Debugging`

## Key Takeaway

This project reinforced the gap between simulation and reality — component tolerances, parasitic capacitance, and power supply noise all required empirical tuning on the bench, a critical skill for hardware engineering.
