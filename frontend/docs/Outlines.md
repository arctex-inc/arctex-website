# This summarizes how the 3D objects and their interactions are handled within the app.

If you want to create interactive 3D objects that respond to user actions like hovering and clicking, you can use the following setup:
const [hoveredObject, setHoveredObject] = useState(null);
const [clickedObject, setClickedObject] = useState(null);

const handlePointerOver = (object) => {
  setHoveredObject(object);
};

const handlePointerOut = () => {
  setHoveredObject(null);
};

const handleClick = (object) => {
  setClickedObject(clickedObject === object ? null : object);
};

You can then apply these event handlers to your 3D objects like so:
<mesh
  rotation={[0, 1, 0]} // Rotation of the object
  onPointerOver={() => handlePointerOver('box1')} // Detects when the object is hovered
  onPointerOut={handlePointerOut} // Detects when the hover ends
  onClick={() => handleClick('box1')} // Detects when the object is clicked
>
  <boxGeometry args={[1, 1, 1]} /> // Defines the shape of the object
  <meshStandardMaterial color='orange' /> // Sets the color of the object
  {(hoveredObject === 'box1' || clickedObject === 'box1') && <Outlines color="white" thickness={0.1} />} // Conditional outline based on hover or click
</mesh>

