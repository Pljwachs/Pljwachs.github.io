// Edit this list to add, remove or reorder projects.
//
// media (optional) is one of:
//   { type: "video", src: "assets/projects/demo.mp4", alt: "What the clip shows" }  plays silently on a loop
//   { type: "image", src: "assets/projects/demo.gif", alt: "What the image shows" }  GIF, JPG or PNG
//   { type: "youtube", id: "VIDEO_ID", alt: "Video title" }                          the id from the YouTube URL
//
// detailMedia (optional) replaces media on the detail page. Add controls: true to a video for a click-to-play player.
//
// links (optional) can hold any number of { label, url } entries.
//
// id is required and becomes the detail page address (project.html?id=...). Keep it short, lowercase, unique.
// details (optional) is a list of paragraphs shown on the project's detail page.

const PROJECTS = [
  {
    id: "forest-muav-explorer",
    title: "Forest-MUAV-Explorer",
    description: "Coordinated autonomous exploration planner for vast cluttered area multi-agent searching and mapping",
    media: { type: "image", src: "assets/projects/forest_explorer/forest_explorer_vis.png", alt: "Forest Explorer fig" },
    detailMedia: { type: "video", src: "assets/projects/forest_explorer/forest_explorer.mp4", alt: "Forest Explorer mission simulation", controls: true },
    details: [
      "While working on my master's, I often imagined drones flying autonomously through forests, thinking this technology could make search-and-rescue missions more efficient. But under the canopy, we face GNSS-denied environments and limited communication, which present significant challenges. Developing an information-sharing system is essential for peer-to-peer odometry calibration and informed navigation decisions.",
      "At the start of my master's thesis, I divided the project into three components: communication, coordination, and exploration. For each, I used a 2D model to test configurations and assess how area size influenced exploration efficiency. I was surprised that robust design and initial planning can address connectivity issues, revealing that system architecture was the primary challenge for long-term team planning.",
      "I built the system using ROS2 and C++ and am now testing its reliability. My next step is to integrate it with PX4 and run test flights with 10 drones over an area of about 10000 to 40000 square meters.",
      "The code will be open source once I finish my thesis."
    ],
    tags: ["ROS2", "C++","Autonomy"],
  },
  {
    id: "multi-agent-trajectory-planning",
    title: "Multi-Agent Trajectory Planning",
    description: "Spatiotemporal convex constraints on multi-agent trajectory planning with iterative optimization",
    media: { type: "image", src: "assets/projects/multi_trajectory_planning/6_cross_image.png", alt: "multi trajectory planner simulation fig" },
    detailMedia: { type: "video", src: "assets/projects/multi_trajectory_planning/6_cross.mp4", alt: "multi trajectory planner simulation", controls: true },
    details: [
      "Multi-agent coordination requires formulating additional geometric constraints within the original optimization method. The convexity of these constraints determines the solution's complexity, while efficient constraint formulation is critical for safety in dynamic environments.",
      "This work begins by evaluating two major trajectory optimization methods: the Mixed Integer Quadratic Program (MIQP) from Faster and the minimum control (MINCO) trajectory with unconstrained optimization from GCOPTER. I then introduce two plane constraints, the Spatio-Temporal Constraint (STC) and the Spatial Section Constraint (SSC), to address potential agent collisions based on specific scenarios. The effectiveness of these methods is demonstrated by a centralized iterative optimization process that successfully manages complex cases, such as eight drones crossing head-on within a few iterations.",
    ],
    tags: ["Trajectory Optimization", "Python"],
    links: [{ label: "Code", url: "https://github.com/Pljwachs/Multi-Agent-Trajectory-Planning" }],
  },
  {
    id: "tandem-wing-tail-sitter",
    title: "Control Architecture for Tandem-Wing Tail-Sitter",
    description: "Cascaded PID architecture for tandem-wing tail-sitter",
    media: { type: "image", src: "assets/projects/tail_sitter/tail_sitter.jpg", alt: "Tandem-wing tail-sitter" },
    detailMedia: { type: "video", src: "assets/projects/tail_sitter/tail_sitter.mp4", alt: "Tandem-wing tail-sitter mission simulation", controls: true },
    details: [
      "This bachelor's thesis examines the advantages of a tandem-wing tail-sitter, which is capable of both vertical and horizontal takeoff without requiring a tilt-rotor mechanism. Thus, it reduces overall system complexity.",
      "A primary challenge of this configuration is its overactuated nature and the requirement for aerodynamic data at large angles of attack (AOA). To address this, Ansys Fluent was used to extrapolate aerodynamic coefficients from small AOA values and linearize them into the stall profile. These coefficients were then fed into a defined dynamic model to analyze system response. The control architecture was further developed by decoupling longitudinal and lateral motion through a cascaded PID control scheme. Finally, a complete longitudinal mission profile was simulated in MATLAB Simulink.",
    ],
    tags: ["Control", "MATLAB"],
  },
  {
    id: "rocket-altitude-control",
    title: "Rocket Hovering Control",
    description: "MPC controller for rocket altitude control",
    media: { type: "image", src: "assets/projects/rocket_hopper/profile.png", alt: "Rocket hopper profile" },
    detailMedia: { type: "video", src: "assets/projects/rocket_hopper/hover.mp4", alt: "Rocket hopper mission simulation", controls: true },
    details: [
      "The course project consists of two tasks: modeling a gas-motion dynamic digital twin and an MPC controller for hovering.",
      "The coupling between gas and rocket motion dynamics is the main challenge because components such as the hose, fitting, and main valve exhibit behaviors that must be characterized in terms of their physical properties. Before real testing, I needed to conduct robustness tests to ensure system stability, covering margins for parameter errors or time dilation of the gas-to-thrust. The work finally keeps model mismatch and error rate within an acceptable margin, smaller than the worst-case scenario (position error less than 6%).",
    ],
    tags: ["Control", "MPC","Python"],
    links: [{ label: "Code", url: "https://github.com/Pljwachs/Control-and-Simulation-of-Rocket-Hopper/tree/MPC_version" }],
  },
];
