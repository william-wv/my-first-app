import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, Platform, StyleSheet, View } from 'react-native';

const useNativeDriver = Platform.OS !== 'web';

const { width: W, height: H } = Dimensions.get('window');

type Particle = {
  id:      number;
  startX:  number;
  y:       number;
  size:    number;
  speedPx: number; 
  opacity: number;
  isComet: boolean;
};

function rnd(a: number, b: number) {
  return a + Math.random() * (b - a);
}

// Gerado uma vez no load do módulo — posições fixas por sessão
const PARTICLES: Particle[] = [
  // Estrelas minúsculas (fundo distante)
  ...Array.from({ length: 28 }, (_, i) => ({
    id: i, startX: rnd(0, W + 300), y: rnd(0, H),
    size: rnd(0.8, 1.6), speedPx: rnd(35, 80), opacity: rnd(0.2, 0.55), isComet: false,
  })),
  // Estrelas pequenas (camada intermediária)
  ...Array.from({ length: 14 }, (_, i) => ({
    id: 28 + i, startX: rnd(0, W + 200), y: rnd(0, H),
    size: rnd(1.6, 2.5), speedPx: rnd(80, 180), opacity: rnd(0.45, 0.8), isComet: false,
  })),
  // Cometas rápidos com cauda
  ...Array.from({ length: 5 }, (_, i) => ({
    id: 42 + i, startX: rnd(W * 0.1, W + 600), y: rnd(H * 0.04, H * 0.9),
    size: 3, speedPx: rnd(500, 1050), opacity: 1, isComet: true,
  })),
];

// ─── Partícula animada individual ────────────────────────────────────────────
function AnimatedParticle({ p }: { p: Particle }) {
  const x = useRef(new Animated.Value(p.startX)).current;

  useEffect(() => {
    // Duração proporcional à distância percorrida (startX → -100)
    const duration = ((p.startX + 100) / p.speedPx) * 1000;

    const anim = Animated.loop(
      Animated.timing(x, { toValue: -100, duration, useNativeDriver })
    );
    anim.start();
    return () => anim.stop();
  }, []);

  return (
    <Animated.View
      style={{ position: 'absolute', top: p.y, opacity: p.opacity, transform: [{ translateX: x }], pointerEvents: 'none' }}
    >
      {p.isComet ? (
        // Cabeça → cauda: a cabeça fica à esquerda (direção do movimento)
        <View style={styles.cometRow}>
          <View style={styles.cometHead} />
          <View style={styles.cometNear} />
          <View style={styles.cometFar} />
        </View>
      ) : (
        <View style={{ width: p.size, height: p.size, borderRadius: p.size / 2, backgroundColor: '#fff' }} />
      )}
    </Animated.View>
  );
}

export default function StarField() {
  return (
    <View style={[StyleSheet.absoluteFill, { pointerEvents: 'none' }]}>
      {PARTICLES.map(p => <AnimatedParticle key={p.id} p={p} />)}
    </View>
  );
}

const styles = StyleSheet.create({
  cometRow: {
    flexDirection: 'row',
    alignItems:    'center',
  },
  cometHead: {
    width:           4,
    height:          4,
    borderRadius:    2,
    backgroundColor: '#ffffff',
    shadowColor:     '#a78bfa',
    shadowOpacity:   1,
    shadowRadius:    6,
    elevation:       6,
  },
  cometNear: {
    width:           18,
    height:          1.5,
    backgroundColor: 'rgba(255,255,255,0.45)',
    borderRadius:    1,
  },
  cometFar: {
    width:           36,
    height:          0.8,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius:    1,
  },
});
