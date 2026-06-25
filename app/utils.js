'use client';
import useCanvasCursor from '../hooks/CanvasCursorEffect';
const CanvasCursor = () => {
  useCanvasCursor();
  return <canvas className="pointer-events-none fixed inset-0" id="canvas" />;
};
export default CanvasCursor;
