import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    THREE: any;
  }
}

const ThreeJSBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current || !window.THREE) return;
    
    let animationId: number;
    
    try {
      // Scene setup with improved performance
      const scene = new window.THREE.Scene();
      const camera = new window.THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new window.THREE.WebGLRenderer({ 
        alpha: true, 
        antialias: false, // Disable for better performance
        powerPreference: "high-performance"
      });
      
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      containerRef.current.appendChild(renderer.domElement);
      
      // Create AR-themed geometries
      const geometries = [
        new window.THREE.IcosahedronGeometry(1, 0),
        new window.THREE.OctahedronGeometry(1, 0),
        new window.THREE.TetrahedronGeometry(1, 0)
      ];
      
      const material = new window.THREE.MeshBasicMaterial({ 
        color: 0x3b82f6,
        wireframe: true,
        transparent: true,
        opacity: 0.6
      });
      
      const arElements: Array<{
        mesh: any;
        rotationSpeed: { x: number; y: number };
        floatOffset: number;
      }> = [];
      
      // Reduced number of elements for better performance
      for (let i = 0; i < 8; i++) {
        const geometry = geometries[i % geometries.length];
        const element = new window.THREE.Mesh(geometry, material);
        
        element.position.x = (Math.random() - 0.5) * 25;
        element.position.y = (Math.random() - 0.5) * 25;
        element.position.z = (Math.random() - 0.5) * 25;
        element.scale.setScalar(Math.random() * 0.8 + 0.3);
        
        scene.add(element);
        arElements.push({
          mesh: element,
          rotationSpeed: {
            x: (Math.random() - 0.5) * 0.01,
            y: (Math.random() - 0.5) * 0.01
          },
          floatOffset: Math.random() * Math.PI * 2
        });
      }
      
      camera.position.z = 15;
      
      // Optimize animation loop
      const animate = () => {
        animationId = requestAnimationFrame(animate);
        
        const time = Date.now() * 0.0005;
        
        arElements.forEach((element) => {
          element.mesh.rotation.x += element.rotationSpeed.x;
          element.mesh.rotation.y += element.rotationSpeed.y;
          element.mesh.position.y += Math.sin(time + element.floatOffset) * 0.005;
        });
        
        renderer.render(scene, camera);
      };
      
      animate();
      
      // Handle resize with debouncing
      let resizeTimeout: NodeJS.Timeout;
      const handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        }, 100);
      };
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationId);
        if (containerRef.current && renderer.domElement) {
          containerRef.current.removeChild(renderer.domElement);
        }
        renderer.dispose();
      };
    } catch (error) {
      console.log('Three.js initialization failed:', error);
    }
  }, []);
  
  return <div ref={containerRef} id="threejs-container"></div>;
};

export default ThreeJSBackground;
