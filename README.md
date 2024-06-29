# Steam Friends Graph
Displays friend connections between steam users in 3D space.

TODO:
- [ ] Setup 3D scene in ThreeJS.
- [ ] Parse Steam friends from the given user with custom connection depth.
- [ ] Display friends in the scene using force-directed graph.
  - [ ] User node (either circle billboard or a sphere)
  - [ ] Username, user status, other metadata, if relevant.
  - [ ] Open user profile on username click.
- [ ] Add FPS camera controls:
  - [ ] Control the camera with WASD keys (disable orbiting).
    - [ ] Update network connections according to the nearest user (hard / nice to have).
  - [ ] Allow rotating the camera with RMB. 
  - [ ] Turn camera on user node selection single click (enable orbiting).
  - [ ] Zoom camera to user node selection on double click (enable/keep orbiting).
    - [ ] Update network connections from the focused node according to connection depth.
