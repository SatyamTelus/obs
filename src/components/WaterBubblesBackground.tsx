import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useDarkMode } from '../contexts/DarkModeContext';

interface WaterBubblesBackgroundProps {
  className?: string;
}

const WaterBubblesBackground: React.FC<WaterBubblesBackgroundProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const bubblesRef = useRef<THREE.Mesh[]>([]);
  const frameIdRef = useRef<number | undefined>(undefined);
  const mousePositionRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 }); // Mouse position in 2D world space
  const targetMousePositionRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 }); // Smooth target position
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Set background colors based on dark mode - whitish for light mode to match other pages
    const backgroundColor = isDarkMode ? new THREE.Color(0x0f0f0f) : new THREE.Color(0xf8f9fa); // Whitish background to match other pages
    scene.background = backgroundColor;
    scene.fog = new THREE.Fog(scene.background.getHex(), 50, 200);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 50;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    scene.add(directionalLight);

    // Enhanced lighting for better 3D depth perception with cyan tones
    const light1Color = isDarkMode ? 0x4dd0e1 : 0x80d8ff; // Rich cyan for dark mode, lighter cyan for light mode (soft water)
    const light2Color = isDarkMode ? 0x00bcd4 : 0xb3e5fc; // Vibrant cyan for dark mode, pale cyan for light mode
    const light1Intensity = isDarkMode ? 1.2 : 1.1; // Softer lighting for delicate water effect
    const light2Intensity = isDarkMode ? 0.9 : 0.8; // Gentler secondary light
    
    const pointLight1 = new THREE.PointLight(light1Color, light1Intensity, 100);
    pointLight1.position.set(20, 20, 20);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(light2Color, light2Intensity, 100);
    pointLight2.position.set(-20, -20, 20);
    scene.add(pointLight2);

    // Create bubbles
    const bubbles: THREE.Mesh[] = [];
    const bubbleCount = 90; // Increased from 60 to 90 for more coverage
    const minBubbleSize = 1.2; // Minimum bubble size
    const maxBubbleSize = 1.8; // Reduced max size for smaller bubbles

    for (let i = 0; i < bubbleCount; i++) {
      // Random bubble size with controlled maximum
      const size = Math.random() * (maxBubbleSize - minBubbleSize) + minBubbleSize;
      
      // Bubble geometry
      const geometry = new THREE.SphereGeometry(size, 32, 32);
      
      // Bubble material like real water droplets - clear and transparent with depth
      // Elegant cyan for both modes - lighter and softer in light mode like real water
      const bubbleColor = isDarkMode ? 0x4dd0e1 : 0xb3f0ff; // Rich cyan for dark mode, light water cyan for light mode
      const bubbleOpacity = isDarkMode ? 0.4 : 0.28; // Lighter opacity in light mode for soft water appearance
      const bubbleTransmission = isDarkMode ? 0.85 : 0.92; // More transparent in light mode for delicate water effect
      
      const material = new THREE.MeshPhysicalMaterial({
        color: bubbleColor,
        transparent: true,
        opacity: bubbleOpacity,
        roughness: 0.05, // Slight roughness for better light scattering and depth
        metalness: 0.1, // Small metalness for better reflections
        clearcoat: 1, // Maximum gloss
        clearcoatRoughness: 0.1, // Slight clearcoat roughness for better depth
        transmission: bubbleTransmission,
        thickness: 0.8, // Thicker for more dimensional appearance
        envMapIntensity: isDarkMode ? 1.5 : 2.8, // Higher reflection in light mode for light, glassy appearance
        reflectivity: 1.0, // Maximum reflectivity for depth
        side: THREE.DoubleSide,
        ior: 1.33, // Index of refraction for water
        sheen: isDarkMode ? 0.5 : 0.7, // Moderate sheen in light mode for soft water appearance
        sheenColor: isDarkMode ? new THREE.Color(0xffffff) : new THREE.Color(0xd4f4ff), // Light cyan sheen in light mode
      });
      
      const bubble = new THREE.Mesh(geometry, material);
      
      // Randomly choose spawn direction: 0 = top, 1 = left, 2 = right
      const spawnDirection = Math.random();
      
      if (spawnDirection < 0.5) {
        // Top-spawned bubbles (50%)
        // Initial position: distributed across screen for immediate visibility
        bubble.position.x = (Math.random() - 0.5) * 120;
        bubble.position.y = Math.random() * 160 - 60; // Spread from -60 to 100
        bubble.position.z = (Math.random() - 0.5) * 100;
        
        // Velocity: falling down with slight horizontal drift
        bubble.userData.velocity = {
          x: (Math.random() - 0.5) * 0.03, // Horizontal drift
          y: Math.random() * 0.04 + 0.02, // Downward fall (0.02 to 0.06)
          z: (Math.random() - 0.5) * 0.015,
        };
        bubble.userData.spawnType = 'top';
      } else if (spawnDirection < 0.75) {
        // Left-spawned bubbles (25%)
        // Initial position: distributed across screen for immediate visibility
        bubble.position.x = Math.random() * 140 - 70; // Spread from -70 to 70
        bubble.position.y = (Math.random() - 0.3) * 120; // Random height
        bubble.position.z = (Math.random() - 0.5) * 100;
        
        // Velocity: moving right with slight vertical drift
        bubble.userData.velocity = {
          x: Math.random() * 0.04 + 0.02, // Move right (0.02 to 0.06)
          y: (Math.random() - 0.5) * 0.02, // Slight vertical drift
          z: (Math.random() - 0.5) * 0.015,
        };
        bubble.userData.spawnType = 'left';
      } else {
        // Right-spawned bubbles (25%)
        // Initial position: distributed across screen for immediate visibility
        bubble.position.x = Math.random() * 140 - 70; // Spread from -70 to 70
        bubble.position.y = (Math.random() - 0.3) * 120; // Random height
        bubble.position.z = (Math.random() - 0.5) * 100;
        
        // Velocity: moving left with slight vertical drift
        bubble.userData.velocity = {
          x: -(Math.random() * 0.04 + 0.02), // Move left (-0.02 to -0.06)
          y: (Math.random() - 0.5) * 0.02, // Slight vertical drift
          z: (Math.random() - 0.5) * 0.015,
        };
        bubble.userData.spawnType = 'right';
      }
      
      // Store initial velocities for reference
      bubble.userData.initialVelocity = { ...bubble.userData.velocity };
      bubble.userData.fallSpeed = bubble.userData.velocity.y;
      
      // Random rotation speed
      bubble.userData.rotationSpeed = {
        x: (Math.random() - 0.5) * 0.01,
        y: (Math.random() - 0.5) * 0.01,
        z: (Math.random() - 0.5) * 0.01,
      };
      
      scene.add(bubble);
      bubbles.push(bubble);
    }
    
    bubblesRef.current = bubbles;

    // Mouse/Touch tracking - using raw client coordinates for 2D repelling
    const handleMouseMove = (event: MouseEvent | TouchEvent) => {
      let clientX: number;
      let clientY: number;

      if (event instanceof MouseEvent) {
        clientX = event.clientX;
        clientY = event.clientY;
      } else {
        // Touch event
        if (event.touches.length > 0) {
          clientX = event.touches[0].clientX;
          clientY = event.touches[0].clientY;
        } else {
          return;
        }
      }

      // Convert to world space coordinates (only X and Y, ignore Z for 2D screen interaction)
      const x = (clientX / window.innerWidth) * 2 - 1;
      const y = -(clientY / window.innerHeight) * 2 + 1;

      // Store in world space units
      targetMousePositionRef.current = {
        x: x * 60, // Scale to match bubble spread
        y: y * 60,
      };
    };

    // Add event listeners for mouse and touch
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleMouseMove, { passive: true });
    window.addEventListener('touchstart', handleMouseMove, { passive: true });

    // Animation
    let time = 0;
    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate);
      time += 0.01;

      // Smoothly interpolate mouse position for fluid movement
      mousePositionRef.current.x += (targetMousePositionRef.current.x - mousePositionRef.current.x) * 0.15;
      mousePositionRef.current.y += (targetMousePositionRef.current.y - mousePositionRef.current.y) * 0.15;

      // Animate bubbles
      bubbles.forEach((bubble, index) => {
        // Calculate 2D distance from bubble to mouse (ignoring Z for screen-based interaction)
        const dx = bubble.position.x - mousePositionRef.current.x;
        const dy = bubble.position.y - mousePositionRef.current.y;
        const distanceToMouse = Math.sqrt(dx * dx + dy * dy);
        
        const repelRadius = 20; // Radius of influence (reduced for stronger effect in smaller area)
        
        // Apply repelling force if bubble is within radius
        if (distanceToMouse < repelRadius && distanceToMouse > 0.1) {
          // Calculate direction away from mouse (only X and Y)
          const angle = Math.atan2(dy, dx);
          
          // Calculate repel strength (stronger when closer) - exponential for more dramatic effect
          const normalizedDist = distanceToMouse / repelRadius;
          const repelStrength = Math.pow(1 - normalizedDist, 2) * 2.5; // Quadratic falloff, much stronger
          
          // Apply repelling force (much stronger than other forces)
          bubble.position.x += Math.cos(angle) * repelStrength;
          bubble.position.y += Math.sin(angle) * repelStrength;
        }
        
        // Apply velocity based on spawn type
        if (bubble.userData.spawnType === 'top') {
          // Top-spawned bubbles fall down
          bubble.position.y -= bubble.userData.velocity.y;
          
          // Add swaying motion - reduced when near mouse
          const swayFactor = distanceToMouse < repelRadius ? 0.3 : 1.0;
          const swayAmount = Math.sin(time * 2 + index * 0.5) * 0.15 * swayFactor;
          bubble.position.x += bubble.userData.velocity.x + swayAmount;
          bubble.position.z += bubble.userData.velocity.z + Math.cos(time * 1.5 + index * 0.3) * 0.08;
          
          // Reset if goes off bottom
          if (bubble.position.y < -60) {
            bubble.position.y = 100;
            bubble.position.x = (Math.random() - 0.5) * 120;
          }
        } else if (bubble.userData.spawnType === 'left') {
          // Left-spawned bubbles move right
          bubble.position.x += bubble.userData.velocity.x;
          bubble.position.y -= bubble.userData.velocity.y;
          bubble.position.z += bubble.userData.velocity.z + Math.cos(time * 1.5 + index * 0.3) * 0.08;
          
          // Reset if goes off right side
          if (bubble.position.x > 70) {
            bubble.position.x = -70;
            bubble.position.y = (Math.random() - 0.3) * 120;
          }
        } else {
          // Right-spawned bubbles move left
          bubble.position.x += bubble.userData.velocity.x;
          bubble.position.y -= bubble.userData.velocity.y;
          bubble.position.z += bubble.userData.velocity.z + Math.cos(time * 1.5 + index * 0.3) * 0.08;
          
          // Reset if goes off left side
          if (bubble.position.x < -70) {
            bubble.position.x = 70;
            bubble.position.y = (Math.random() - 0.3) * 120;
          }
        }
        
        // Rotate bubbles gently
        bubble.rotation.x += bubble.userData.rotationSpeed.x;
        bubble.rotation.y += bubble.userData.rotationSpeed.y;
        bubble.rotation.z += bubble.userData.rotationSpeed.z;
        
        // Wrap vertically for side-spawned bubbles
        if (bubble.userData.spawnType !== 'top') {
          if (bubble.position.y < -60) bubble.position.y = 100;
          if (bubble.position.y > 100) bubble.position.y = -60;
        }
        
        // Wrap Z-axis for all bubbles
        if (bubble.position.z > 60) bubble.position.z = -60;
        if (bubble.position.z < -60) bubble.position.z = 60;
      });

      // Gentle camera movement
      camera.position.x = Math.sin(time * 0.1) * 5;
      camera.position.y = Math.cos(time * 0.15) * 3;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleMouseMove);
      window.removeEventListener('touchstart', handleMouseMove);
      
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }
      
      // Dispose of Three.js objects
      bubbles.forEach(bubble => {
        bubble.geometry.dispose();
        if (Array.isArray(bubble.material)) {
          bubble.material.forEach(material => material.dispose());
        } else {
          bubble.material.dispose();
        }
        scene.remove(bubble);
      });
      
      renderer.dispose();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isDarkMode]);

  return (
    <div 
      ref={containerRef} 
      className={className}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default WaterBubblesBackground;

