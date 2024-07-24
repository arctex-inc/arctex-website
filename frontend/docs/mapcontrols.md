# This summarizes how the camera rotating ability works.

If you want the camera to only face a certain way, but still have the user be able to rotate within a given bound.

<MapControls
            minDistance={2}
            maxDistance={8} // max zoom out for scroll wheel
            minAzimuthAngle={-Math.PI / 4} // Limiting the left-right panning for right clicking
            maxAzimuthAngle={Math.PI / 4} // Limiting the left-right panning for right clicking
            minPolarAngle={Math.PI / 6} // Limiting the up-down panning for right clicking
            maxPolarAngle={Math.PI / 2} // Limiting the up-down panning for right clicking
            />


To restrict any rotating camera ability whatsoever, just set both to equivalent values, such as 0

<MapControls
            minDistance={2}
            maxDistance={8} // max zoom out for scroll wheel
            minAzimuthAngle={0} // Limiting the left-right panning for right clicking
            maxAzimuthAngle={0} // Limiting the left-right panning for right clicking
            minPolarAngle={Math.PI / 6} // Limiting the up-down panning for right clicking
            maxPolarAngle={Math.PI / 6} // Limiting the up-down panning for right clicking
            />