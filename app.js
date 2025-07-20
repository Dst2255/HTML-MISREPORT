// ===== DASHBOARD DATA WITH MULTIPLE MONTHS =====
const dashboardData = {
  production: {
    monthly: { "Starline": 245, "Skyline": 189, "Skyline Pro": 156, "HD Heavy Duty": 98 },
    yearly: { "Starline": 2847, "Skyline": 2156, "Skyline Pro": 1789, "HD Heavy Duty": 1234 }
  },
  
  // Month-specific data for filtering
  monthlyData: {
    "2025-07": {
      weldAudit: 89.5,
      criticalProcessAudit: 92.3,
      inProcessAudit: { value: 342, status: "Good" },
      npd: 3,
      topDefects: [
        { name: "Paint Quality", percentage: 23.4 },
        { name: "Weld Defects", percentage: 18.7 },
        { name: "Electrical Issues", percentage: 15.2 },
        { name: "Body Panel Gaps", percentage: 12.8 },
        { name: "Engine Issues", percentage: 10.1 }
      ]
    },
    "2025-06": {
      weldAudit: 87.2,
      criticalProcessAudit: 90.1,
      inProcessAudit: { value: 318, status: "Good" },
      npd: 2,
      topDefects: [
        { name: "Paint Quality", percentage: 25.1 },
        { name: "Electrical Issues", percentage: 19.3 },
        { name: "Weld Defects", percentage: 16.8 },
        { name: "Body Panel Gaps", percentage: 14.2 },
        { name: "Engine Issues", percentage: 11.5 }
      ]
    },
    "2025-05": {
      weldAudit: 91.8,
      criticalProcessAudit: 88.7,
      inProcessAudit: { value: 367, status: "Excellent" },
      npd: 4,
      topDefects: [
        { name: "Weld Defects", percentage: 21.2 },
        { name: "Paint Quality", percentage: 20.8 },
        { name: "Electrical Issues", percentage: 17.4 },
        { name: "Engine Issues", percentage: 13.9 },
        { name: "Body Panel Gaps", percentage: 10.7 }
      ]
    }
  },

  // QRQC Detailed Issues Data
  qrqcIssues: {
    part: [
      {
        id: 1,
        title: "Engine Mount Bracket Failure",
        description: "Multiple instances of engine mount bracket failure reported in Starline model during field testing. The bracket shows signs of fatigue cracking near the weld joint after approximately 15,000 km of operation.",
        rca: [
          "Material specification did not account for dynamic loading conditions",
          "Inadequate heat treatment process leading to residual stress concentration",
          "Design geometry creates stress concentration at weld junction"
        ],
        ica: [
          "Immediate recall of affected parts from production line",
          "Enhanced inspection protocol for all engine mount brackets",
          "Temporary reinforcement solution implemented for existing inventory"
        ],
        pca: [
          "Redesign bracket with improved material specification (high-strength steel)",
          "Optimize heat treatment cycle to eliminate residual stresses",
          "Implement finite element analysis for all critical structural components"
        ],
        beforeImage: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%23ff6b6b'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='white' font-size='16'%3EBEFORE: Cracked Bracket%3C/text%3E%3C/svg%3E",
        afterImage: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%2351cf66'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='white' font-size='16'%3EAFTER: Reinforced Design%3C/text%3E%3C/svg%3E"
      },
      {
        id: 2,
        title: "Fuel Pump Assembly Leak",
        description: "Fuel pump assemblies in HD Heavy Duty models showing seal degradation leading to fuel leakage. Issue identified during pre-delivery inspection across multiple units.",
        rca: [
          "Seal material incompatible with new bio-fuel blend specifications",
          "Assembly torque specification insufficient for seal compression",
          "Temperature cycling causing seal material degradation"
        ],
        ica: [
          "Replace all affected fuel pump assemblies with improved seals",
          "Update assembly procedures with correct torque specifications",
          "Implement temperature cycling test in validation process"
        ],
        pca: [
          "Source bio-fuel compatible seal materials from approved vendor",
          "Redesign pump housing for better seal retention",
          "Establish long-term material compatibility testing program"
        ],
        beforeImage: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%23ffa726'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='white' font-size='16'%3EBEFORE: Leaking Seal%3C/text%3E%3C/svg%3E",
        afterImage: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%2342a5f5'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='white' font-size='16'%3EAFTER: New Bio-Compatible Seal%3C/text%3E%3C/svg%3E"
      },
      {
        id: 3,
        title: "Transmission Housing Porosity",
        description: "Cast transmission housings showing porosity defects leading to potential oil seepage. Quality control identified this issue during machining operations.",
        rca: [
          "Foundry process parameters not optimized for complex housing geometry",
          "Gas entrapment during casting due to inadequate venting",
          "Alloy composition variation affecting casting quality"
        ],
        ica: [
          "100% pressure testing of all transmission housings before machining",
          "Temporary process adjustment to reduce gas entrapment",
          "Enhanced supplier audit and process control"
        ],
        pca: [
          "Complete foundry process optimization with new venting design",
          "Implement real-time alloy composition monitoring",
          "Establish statistical process control for all casting parameters"
        ],
        beforeImage: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%23ef5350'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='white' font-size='14'%3EBEFORE: Porous Housing%3C/text%3E%3C/svg%3E",
        afterImage: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%2366bb6a'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='white' font-size='14'%3EAFTER: Optimized Casting%3C/text%3E%3C/svg%3E"
      },
      {
        id: 4,
        title: "Brake Disc Warping",
        description: "Front brake discs in Skyline Pro models showing warping under heavy braking conditions. Customer complaints received regarding vibration during braking.",
        rca: [
          "Thermal stress concentration due to inadequate cooling channel design",
          "Material grade not suitable for heavy-duty commercial applications",
          "Machining process creating internal stress concentration"
        ],
        ica: [
          "Immediate field service bulletin issued for affected vehicles",
          "Enhanced brake disc inspection at assembly",
          "Temporary restriction on maximum gross vehicle weight"
        ],
        pca: [
          "Redesign cooling channel geometry for improved heat dissipation",
          "Upgrade to higher grade cast iron material with better thermal properties",
          "Implement stress-relief heat treatment in manufacturing process"
        ],
        beforeImage: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%23ff7043'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='white' font-size='16'%3EBEFORE: Warped Disc%3C/text%3E%3C/svg%3E",
        afterImage: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%234caf50'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='white' font-size='16'%3EAFTER: Enhanced Design%3C/text%3E%3C/svg%3E"
      }
    ],
    process: [
      {
        id: 1,
        title: "Welding Parameter Inconsistency",
        description: "Inconsistent weld quality observed in chassis assembly line. Multiple stations showing parameter drift leading to weld strength variations beyond acceptable limits.",
        rca: [
          "Welding machine calibration intervals too long for process stability",
          "Operator training insufficient for parameter adjustment procedures",
          "Environmental conditions affecting arc stability"
        ],
        ica: [
          "Daily calibration check implemented for all welding stations",
          "Refresher training program initiated for all welding operators",
          "Temporary manual monitoring of critical weld parameters"
        ],
        pca: [
          "Install automated parameter monitoring and correction system",
          "Establish predictive maintenance program for welding equipment",
          "Implement statistical process control with real-time alerts"
        ],
        beforeImage: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%23ff5252'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='white' font-size='14'%3EBEFORE: Inconsistent Welds%3C/text%3E%3C/svg%3E",
        afterImage: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%238bc34a'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='white' font-size='14'%3EAFTER: Stable Parameters%3C/text%3E%3C/svg%3E"
      },
      {
        id: 2,
        title: "Paint Booth Contamination",
        description: "Paint finish quality issues due to contamination in paint booth environment. Multiple vehicles require rework due to surface defects and color matching problems.",
        rca: [
          "Inadequate filtration system allowing particle contamination",
          "Cross-contamination between different paint colors",
          "Maintenance procedures not effectively removing residue buildup"
        ],
        ica: [
          "Enhanced booth cleaning protocol between paint changes",
          "Upgrade filtration system with higher efficiency filters",
          "Implement particle monitoring system in paint booth"
        ],
        pca: [
          "Complete paint booth renovation with improved air handling system",
          "Install automated booth cleaning system",
          "Establish dedicated booths for different color families"
        ],
        beforeImage: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%23f44336'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='white' font-size='14'%3EBEFORE: Contaminated Surface%3C/text%3E%3C/svg%3E",
        afterImage: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%232e7d32'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='white' font-size='14'%3EAFTER: Clean Finish%3C/text%3E%3C/svg%3E"
      },
      {
        id: 3,
        title: "Assembly Line Bottleneck",
        description: "Production throughput below target due to bottleneck at final assembly station. Queue buildup causing delays and impacting delivery schedules.",
        rca: [
          "Manual assembly process not optimized for current production volume",
          "Insufficient number of skilled technicians at critical station",
          "Material supply timing not synchronized with assembly pace"
        ],
        ica: [
          "Temporary additional shifts assigned to bottleneck station",
          "Cross-train operators from other stations for flexibility",
          "Implement buffer inventory at critical assembly points"
        ],
        pca: [
          "Redesign assembly sequence with parallel processing capabilities",
          "Invest in semi-automated assembly tools for complex operations",
          "Implement lean manufacturing principles with continuous flow"
        ],
        beforeImage: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%23ff9800'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='white' font-size='16'%3EBEFORE: Queue Buildup%3C/text%3E%3C/svg%3E",
        afterImage: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%23689f38'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='white' font-size='16'%3EAFTER: Smooth Flow%3C/text%3E%3C/svg%3E"
      },
      {
        id: 4,
        title: "Quality Inspection Variance",
        description: "Inconsistent quality inspection results between different shifts and inspectors. Same components receiving different quality ratings leading to confusion.",
        rca: [
          "Inspection criteria not clearly defined with objective measurements",
          "Training variations between different inspector groups",
          "Measurement equipment calibration inconsistencies"
        ],
        ica: [
          "Standardize inspection checklists with measurable criteria",
          "Conduct inter-inspector calibration sessions",
          "Daily verification of measurement equipment accuracy"
        ],
        pca: [
          "Implement digital inspection system with automated measurements",
          "Establish inspector certification program with regular assessments",
          "Deploy statistical analysis tools for inspection data trending"
        ],
        beforeImage: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%23e53935'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='white' font-size='14'%3EBEFORE: Inconsistent Results%3C/text%3E%3C/svg%3E",
        afterImage: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%23388e3c'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='white' font-size='14'%3EAFTER: Standardized Process%3C/text%3E%3C/svg%3E"
      }
    ],
    design: [
      {
        id: 1,
        title: "Cab Ergonomics Feedback",
        description: "Driver feedback indicates discomfort during long-haul operations. Seat positioning and control layout not optimal for extended driving periods in HD Heavy Duty model.",
        rca: [
          "Design based on average anthropometric data, not accounting for regional variations",
          "Insufficient validation testing with actual long-haul drivers",
          "Control reach distances exceed recommended ergonomic guidelines"
        ],
        ica: [
          "Offer seat adjustment guidance and driver training",
          "Provide optional ergonomic accessories for existing vehicles",
          "Conduct field study with current drivers for detailed feedback"
        ],
        pca: [
          "Complete cab interior redesign based on regional anthropometric data",
          "Implement driver simulation testing in design validation process",
          "Establish driver advisory panel for design reviews"
        ],
        beforeImage: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%23d32f2f'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='white' font-size='14'%3EBEFORE: Poor Ergonomics%3C/text%3E%3C/svg%3E",
        afterImage: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%231976d2'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='white' font-size='14'%3EAFTER: Optimized Layout%3C/text%3E%3C/svg%3E"
      },
      {
        id: 2,
        title: "Aerodynamic Efficiency Gap",
        description: "Fuel consumption higher than target due to suboptimal aerodynamic design. Wind tunnel testing reveals opportunities for drag reduction in Skyline model.",
        rca: [
          "Design optimization focused on aesthetics over aerodynamic efficiency",
          "Insufficient computational fluid dynamics analysis during design phase",
          "Component integration creating unexpected airflow disruptions"
        ],
        ica: [
          "Retrofit aerodynamic aids to existing vehicles where possible",
          "Develop driver training program for fuel-efficient driving techniques",
          "Communicate realistic fuel consumption expectations to customers"
        ],
        pca: [
          "Redesign body panels with integrated aerodynamic features",
          "Establish CFD analysis as mandatory step in design process",
          "Set aerodynamic efficiency targets for all future model development"
        ],
        beforeImage: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%23c62828'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='white' font-size='14'%3EBEFORE: High Drag Design%3C/text%3E%3C/svg%3E",
        afterImage: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%230277bd'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='white' font-size='14'%3EAFTER: Streamlined Profile%3C/text%3E%3C/svg%3E"
      },
      {
        id: 3,
        title: "Electronic Control Unit Integration",
        description: "Multiple ECU communication errors causing intermittent system failures. Integration complexity between different supplier systems creating reliability issues.",
        rca: [
          "System architecture lacks robust error handling protocols",
          "Communication protocols between ECUs not standardized",
          "Insufficient system integration testing during development"
        ],
        ica: [
          "Software update to improve error recovery algorithms",
          "Enhanced diagnostic procedures for field service teams",
          "Priority communication channels established for critical functions"
        ],
        pca: [
          "Redesign system architecture with centralized control strategy",
          "Establish standardized communication protocols for all ECUs",
          "Implement comprehensive system integration test facility"
        ],
        beforeImage: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%23d84315'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='white' font-size='12'%3EBEFORE: Communication Errors%3C/text%3E%3C/svg%3E",
        afterImage: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%23512da8'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='white' font-size='12'%3EAFTER: Integrated System%3C/text%3E%3C/svg%3E"
      },
      {
        id: 4,
        title: "Noise Vibration Harshness Issues",
        description: "Customer complaints regarding excessive cab noise and vibration levels during highway operation. NVH performance below customer expectations across all models.",
        rca: [
          "Insufficient sound dampening materials in cab design",
          "Engine mount isolation not optimized for NVH performance",
          "Panel resonance frequencies coinciding with operating RPM range"
        ],
        ica: [
          "Retrofit additional sound dampening materials where possible",
          "Adjust engine mounting system with improved isolators",
          "Provide customer guidance on operating techniques to minimize NVH"
        ],
        pca: [
          "Complete NVH analysis and redesign of cab structure",
          "Integrate NVH requirements into early design phase",
          "Establish customer-focused NVH testing and validation process"
        ],
        beforeImage: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%23bf360c'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='white' font-size='14'%3EBEFORE: Excessive Noise%3C/text%3E%3C/svg%3E",
        afterImage: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%234527a0'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='white' font-size='14'%3EAFTER: Quiet Operation%3C/text%3E%3C/svg%3E"
      }
    ],
    system: [
      {
        id: 1,
        title: "Fleet Management Integration",
        description: "Telematics system integration issues preventing effective fleet management capabilities. Data transmission inconsistencies affecting route optimization and maintenance scheduling.",
        rca: [
          "Legacy communication protocols not compatible with modern fleet systems",
          "Insufficient bandwidth allocation for data transmission requirements",
          "System integration testing limited to laboratory conditions"
        ],
        ica: [
          "Software patch to improve data transmission reliability",
          "Manual data collection procedures for critical fleet operators",
          "Enhanced technical support for fleet management system setup"
        ],
        pca: [
          "Upgrade to next-generation telematics platform with standardized APIs",
          "Establish dedicated communication infrastructure for fleet data",
          "Implement real-world testing program with major fleet customers"
        ],
        beforeImage: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%23b71c1c'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='white' font-size='12'%3EBEFORE: Data Transmission Issues%3C/text%3E%3C/svg%3E",
        afterImage: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%23283593'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='white' font-size='12'%3EAFTER: Seamless Integration%3C/text%3E%3C/svg%3E"
      },
      {
        id: 2,
        title: "Emissions Control System Malfunction",
        description: "Intermittent emissions control system failures leading to non-compliance with regulatory standards. DPF regeneration cycles not completing successfully.",
        rca: [
          "Software algorithm not accounting for diverse operating conditions",
          "Sensor drift causing incorrect regeneration triggering",
          "System calibration not optimized for regional fuel quality variations"
        ],
        ica: [
          "Emergency software update with revised regeneration parameters",
          "Enhanced driver training on DPF maintenance procedures",
          "Temporary increase in service inspection frequency"
        ],
        pca: [
          "Complete recalibration of emissions control system algorithms",
          "Implement adaptive software that adjusts to operating conditions",
          "Establish regional calibration variants for different fuel qualities"
        ],
        beforeImage: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%23a93226'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='white' font-size='12'%3EBEFORE: System Malfunction%3C/text%3E%3C/svg%3E",
        afterImage: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%231565c0'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='white' font-size='12'%3EAFTER: Optimized Control%3C/text%3E%3C/svg%3E"
      },
      {
        id: 3,
        title: "Power Management System Inefficiency",
        description: "Electrical power distribution system not optimally managing load distribution. Battery drain issues during extended idle periods affecting operational reliability.",
        rca: [
          "Power management algorithms not prioritizing critical systems",
          "Auxiliary load calculations underestimated actual power requirements",
          "Battery capacity sizing inadequate for extended idle operations"
        ],
        ica: [
          "Software update to improve power prioritization logic",
          "Driver advisory system for optimal idle management",
          "Upgrade battery capacity for high-demand applications"
        ],
        pca: [
          "Redesign power management system with intelligent load balancing",
          "Implement predictive power management based on usage patterns",
          "Establish modular power system architecture for different applications"
        ],
        beforeImage: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%23922b21'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='white' font-size='12'%3EBEFORE: Power Inefficiency%3C/text%3E%3C/svg%3E",
        afterImage: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%231e88e5'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='white' font-size='12'%3EAFTER: Smart Management%3C/text%3E%3C/svg%3E"
      },
      {
        id: 4,
        title: "Diagnostic System Communication",
        description: "Service diagnostic tools unable to communicate effectively with vehicle systems. Troubleshooting time increased due to limited diagnostic capability and error code clarity.",
        rca: [
          "Diagnostic protocols not standardized across different vehicle systems",
          "Service tool software not updated for latest system configurations",
          "Error code definitions lack sufficient detail for effective troubleshooting"
        ],
        ica: [
          "Provide enhanced diagnostic tool training for service technicians",
          "Develop detailed troubleshooting guides for common error codes",
          "Establish direct technical support line for complex diagnostic cases"
        ],
        pca: [
          "Implement standardized diagnostic protocols across all systems",
          "Develop next-generation diagnostic interface with enhanced capabilities",
          "Establish predictive maintenance alerts through diagnostic system"
        ],
        beforeImage: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%23641e16'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='white' font-size='12'%3EBEFORE: Limited Diagnostics%3C/text%3E%3C/svg%3E",
        afterImage: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%233949ab'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='white' font-size='12'%3EAFTER: Enhanced Interface%3C/text%3E%3C/svg%3E"
      }
    ]
  },

  // Static data
  qrqc: {
    part: { total: 45, closed: 39, open: 6 },
    process: { total: 32, closed: 28, open: 4 },
    design: { total: 18, closed: 16, open: 2 },
    system: { total: 12, closed: 11, open: 1 }
  },
  
  improvements: [
    {
      title: "Weld Process Enhancement",
      problem: "Inconsistent weld quality in chassis assembly",
      rca: "Improper electrode positioning and inconsistent current settings",
      ica: "Immediate retraining of welding operators and equipment recalibration",
      pca: "Implementation of automated welding system with real-time monitoring",
      date: "2025-07-15"
    },
    {
      title: "Paint Booth Optimization",
      problem: "Paint defects causing customer complaints",
      rca: "Temperature fluctuations and contamination in paint booth",
      ica: "Enhanced filtration system and temperature control implemented",
      pca: "Complete paint booth upgrade with environmental controls",
      date: "2025-07-10"
    }
  ]
};

// ===== GLOBAL VARIABLES =====
let productionChart = null;
let weldAuditChart = null;
let criticalAuditChart = null;
let isYearlyView = false;
let currentSelectedMonth = "2025-07";

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
  console.log('VECV Dashboard initializing...');
  initializeMonthPicker();
  initializeCharts();
  setupEventListeners();
  updateDashboard(currentSelectedMonth);
  updateMetaInfo();
  updateProductionValues();
  console.log('Dashboard loaded successfully');
});

// ===== MONTH PICKER SETUP =====
function initializeMonthPicker() {
  const monthPicker = document.getElementById('monthPicker');
  if (monthPicker) {
    // Set current month as default
    monthPicker.value = currentSelectedMonth;
    
    // Add event listener for month changes
    monthPicker.addEventListener('change', function(e) {
      const newMonth = e.target.value;
      console.log('Month changed from', currentSelectedMonth, 'to', newMonth);
      currentSelectedMonth = newMonth;
      updateDashboard(currentSelectedMonth);
      updateMetaInfo();
    });
    
    console.log('Month picker initialized with:', currentSelectedMonth);
  } else {
    console.error('Month picker element not found');
  }
}

// ===== DASHBOARD UPDATE FUNCTION =====
function updateDashboard(selectedMonth) {
  const monthData = dashboardData.monthlyData[selectedMonth];
  if (!monthData) {
    console.warn('No data found for month:', selectedMonth);
    return;
  }

  console.log('Updating dashboard with data for month:', selectedMonth, monthData);

  // Update Weld Audit
  updateWeldAudit(monthData.weldAudit);
  
  // Update Critical Process Audit
  updateCriticalAudit(monthData.criticalProcessAudit);
  
  // Update In-Process Audit
  updateInProcessAudit(monthData.inProcessAudit);
  
  // Update NPD
  updateNPD(monthData.npd);
  
  // Update Top 5 Defects
  updateTopDefects(monthData.topDefects);

  console.log(`Dashboard updated successfully for month: ${selectedMonth}`);
}

function updateWeldAudit(percentage) {
  const textElement = document.getElementById('weldAuditText');
  if (textElement) {
    textElement.textContent = percentage + '%';
  }
  createWeldAuditChart(percentage);
}

function updateCriticalAudit(percentage) {
  const textElement = document.getElementById('criticalAuditText');
  if (textElement) {
    textElement.textContent = percentage + '%';
  }
  createCriticalAuditChart(percentage);
}

function updateInProcessAudit(data) {
  const numberElement = document.getElementById('inProcessNumber');
  const statusElement = document.getElementById('inProcessStatus');
  
  if (numberElement) {
    numberElement.textContent = data.value;
  }
  
  if (statusElement) {
    statusElement.textContent = data.status;
    statusElement.className = `status-indicator ${data.status.toLowerCase() === 'excellent' ? 'success' : data.status.toLowerCase() === 'good' ? 'success' : 'warning'}`;
  }
}

function updateNPD(value) {
  const npdElement = document.getElementById('npdNumber');
  if (npdElement) {
    npdElement.textContent = value;
  }
}

function updateTopDefects(defects) {
  const container = document.getElementById('defectsList');
  if (!container) return;
  
  container.innerHTML = '';
  
  defects.forEach(defect => {
    const defectItem = document.createElement('div');
    defectItem.className = 'defect-item';
    defectItem.innerHTML = `
      <span class="defect-name">${defect.name}</span>
      <div class="defect-bar">
        <div class="defect-progress" style="width: ${defect.percentage}%"></div>
        <span class="defect-percent">${defect.percentage}%</span>
      </div>
    `;
    container.appendChild(defectItem);
  });
}

// ===== EVENT LISTENERS SETUP =====
function setupEventListeners() {
  // Production toggle
  const toggle = document.getElementById('productionToggle');
  if (toggle) {
    toggle.addEventListener('change', function(e) {
      console.log('Production toggle changed:', e.target.checked);
      toggleProductionView();
    });
  } else {
    console.error('Production toggle not found');
  }
  
  // QRQC category clicks - Updated to use correct data attributes
  const qrqcItems = document.querySelectorAll('.qrqc-item.clickable');
  console.log('Found QRQC items:', qrqcItems.length);
  
  qrqcItems.forEach((item, index) => {
    const category = item.getAttribute('data-category');
    console.log('Setting up QRQC item:', index, 'category:', category);
    
    item.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('QRQC item clicked:', category);
      openQRQCDialog(category);
    });
    
    // Keyboard accessibility
    item.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        e.stopPropagation();
        console.log('QRQC item activated via keyboard:', category);
        openQRQCDialog(category);
      }
    });
  });
  
  // QRQC Dialog close button
  const qrqcCloseBtn = document.getElementById('qrqcCloseBtn');
  if (qrqcCloseBtn) {
    qrqcCloseBtn.addEventListener('click', closeQRQCDialog);
  }
  
  // Modal close functionality
  window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
      closeModal(event.target.id);
    }
  });
  
  // ESC key to close modals
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeAllModals();
      closeQRQCDialog();
    }
  });

  console.log('All event listeners set up successfully');
}

// ===== QRQC DIALOG FUNCTIONS =====
function openQRQCDialog(category) {
  console.log('Opening QRQC dialog for category:', category);
  
  const dialog = document.getElementById('qrqcDialog');
  const title = document.getElementById('qrqcDialogTitle');
  
  if (!dialog || !title) {
    console.error('QRQC dialog elements not found');
    return;
  }
  
  title.textContent = `QRQC ${category.charAt(0).toUpperCase() + category.slice(1)} Issues`;
  
  // Build tabs and content
  buildQRQCTabs(category);
  buildQRQCPanels(category);
  
  // Update QRQC stats
  updateQRQCStats();
  
  dialog.showModal();
  console.log('QRQC dialog opened successfully');
}

function buildQRQCTabs(category) {
  const tabList = document.getElementById('qrqcTabList');
  if (!tabList) {
    console.error('QRQC tab list not found');
    return;
  }
  
  const issues = dashboardData.qrqcIssues[category] || [];
  console.log('Building tabs for', issues.length, 'issues in category:', category);
  
  tabList.innerHTML = '';
  issues.forEach((issue, index) => {
    const tab = document.createElement('button');
    tab.className = 'qrqc-tab';
    tab.textContent = `Issue ${index + 1}`;
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
    tab.setAttribute('aria-controls', `panel-${index}`);
    tab.setAttribute('id', `tab-${index}`);
    tab.addEventListener('click', () => showQRQCPanel(index));
    
    // Keyboard navigation
    tab.addEventListener('keydown', function(e) {
      handleTabKeydown(e, index, issues.length);
    });
    
    tabList.appendChild(tab);
  });
}

function buildQRQCPanels(category) {
  const panelsContainer = document.getElementById('qrqcTabPanels');
  if (!panelsContainer) {
    console.error('QRQC panels container not found');
    return;
  }
  
  const issues = dashboardData.qrqcIssues[category] || [];
  console.log('Building panels for', issues.length, 'issues');
  
  panelsContainer.innerHTML = '';
  issues.forEach((issue, index) => {
    const panel = document.createElement('div');
    panel.className = 'qrqc-tab-panel';
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', `tab-${index}`);
    panel.setAttribute('id', `panel-${index}`);
    panel.setAttribute('aria-hidden', index === 0 ? 'false' : 'true');
    
    panel.innerHTML = `
      <div class="issue-content">
        <div class="issue-header">
          <h3 class="issue-title">${issue.title}</h3>
          <p class="issue-description">${issue.description}</p>
        </div>
        
        <div class="issue-details">
          <div class="rca-ica-pca">
            <div class="analysis-section">
              <h4 class="analysis-title">🔍 Root Cause Analysis (RCA)</h4>
              <ul class="analysis-content">
                ${issue.rca.map(item => `<li>${item}</li>`).join('')}
              </ul>
            </div>
            
            <div class="analysis-section">
              <h4 class="analysis-title">⚡ Immediate Corrective Action (ICA)</h4>
              <ul class="analysis-content">
                ${issue.ica.map(item => `<li>${item}</li>`).join('')}
              </ul>
            </div>
            
            <div class="analysis-section">
              <h4 class="analysis-title">🔧 Permanent Corrective Action (PCA)</h4>
              <ul class="analysis-content">
                ${issue.pca.map(item => `<li>${item}</li>`).join('')}
              </ul>
            </div>
          </div>
          
          <div class="before-after-container">
            <h4 class="before-after-title">📸 Before / After Comparison</h4>
            <div class="before-after-slider">
              <img src="${issue.beforeImage}" alt="Before improvement" class="before-image" />
              <img src="${issue.afterImage}" alt="After improvement" class="after-image" id="afterImage-${index}" />
              <input 
                type="range" 
                min="0" 
                max="100" 
                value="50" 
                class="slider-control" 
                id="slider-${index}"
                aria-label="Slide to compare before and after images"
                oninput="updateBeforeAfterSlider(${index}, this.value)"
              />
            </div>
            <div class="image-labels">
              <span>BEFORE</span>
              <span>AFTER</span>
            </div>
          </div>
        </div>
      </div>
    `;
    
    panelsContainer.appendChild(panel);
  });
  
  // Show first panel
  if (issues.length > 0) {
    showQRQCPanel(0);
  }
}

function showQRQCPanel(index) {
  console.log('Showing QRQC panel:', index);
  
  // Update tabs
  const tabs = document.querySelectorAll('.qrqc-tab');
  tabs.forEach((tab, i) => {
    tab.setAttribute('aria-selected', i === index ? 'true' : 'false');
  });
  
  // Update panels
  const panels = document.querySelectorAll('.qrqc-tab-panel');
  panels.forEach((panel, i) => {
    panel.setAttribute('aria-hidden', i === index ? 'false' : 'true');
  });
}

function handleTabKeydown(e, currentIndex, totalTabs) {
  let newIndex = currentIndex;
  
  switch(e.key) {
    case 'ArrowRight':
      e.preventDefault();
      newIndex = (currentIndex + 1) % totalTabs;
      break;
    case 'ArrowLeft':
      e.preventDefault();
      newIndex = (currentIndex - 1 + totalTabs) % totalTabs;
      break;
    case 'Home':
      e.preventDefault();
      newIndex = 0;
      break;
    case 'End':
      e.preventDefault();
      newIndex = totalTabs - 1;
      break;
    default:
      return;
  }
  
  const targetTab = document.getElementById(`tab-${newIndex}`);
  if (targetTab) {
    targetTab.focus();
    targetTab.click();
  }
}

function updateBeforeAfterSlider(index, value) {
  const afterImage = document.getElementById(`afterImage-${index}`);
  if (afterImage) {
    const percentage = 100 - value;
    afterImage.style.clipPath = `inset(0 ${percentage}% 0 0)`;
  }
}

function closeQRQCDialog() {
  const dialog = document.getElementById('qrqcDialog');
  if (dialog) {
    dialog.close();
    console.log('QRQC dialog closed');
  }
}

// ===== CHART FUNCTIONS =====
function initializeCharts() {
  console.log('Initializing charts...');
  createProductionChart();
  
  // Initialize with current month data
  const currentMonthData = dashboardData.monthlyData[currentSelectedMonth];
  if (currentMonthData) {
    createWeldAuditChart(currentMonthData.weldAudit);
    createCriticalAuditChart(currentMonthData.criticalProcessAudit);
  }
}

function createProductionChart() {
  const ctx = document.getElementById('productionChart');
  if (!ctx) {
    console.error('Production chart canvas not found');
    return;
  }
  
  const data = isYearlyView ? dashboardData.production.yearly : dashboardData.production.monthly;
  const labels = Object.keys(data);
  const values = Object.values(data);
  
  console.log('Creating production chart with data:', data);
  
  if (productionChart) {
    productionChart.destroy();
  }
  
  productionChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: isYearlyView ? 'Yearly Production' : 'Monthly Production',
        data: values,
        backgroundColor: ['#C8102E', '#a00d25', '#003366', '#4a5568'],
        borderColor: ['#C8102E', '#a00d25', '#003366', '#4a5568'],
        borderWidth: 1,
        borderRadius: 4,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        title: {
          display: true,
          text: isYearlyView ? 'Yearly Production by Model' : 'Monthly Production by Model',
          font: { size: 16, weight: 'bold' },
          color: '#333'
        }
      },
      scales: {
        y: { beginAtZero: true, grid: { color: '#e2e8f0' }, ticks: { color: '#666' } },
        x: { grid: { display: false }, ticks: { color: '#666', maxRotation: 45 } }
      }
    }
  });
}

function createWeldAuditChart(percentage) {
  const ctx = document.getElementById('weldAuditChart');
  if (!ctx) {
    console.error('Weld audit chart canvas not found');
    return;
  }
  
  if (weldAuditChart) {
    weldAuditChart.destroy();
  }
  
  weldAuditChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [percentage, 100 - percentage],
        backgroundColor: ['#C8102E', '#e2e8f0'],
        borderWidth: 0,
        cutout: '70%'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { enabled: false } }
    }
  });
}

function createCriticalAuditChart(percentage) {
  const ctx = document.getElementById('criticalAuditChart');
  if (!ctx) {
    console.error('Critical audit chart canvas not found');
    return;
  }
  
  if (criticalAuditChart) {
    criticalAuditChart.destroy();
  }
  
  criticalAuditChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [percentage, 100 - percentage],
        backgroundColor: ['#28a745', '#e2e8f0'],
        borderWidth: 0,
        cutout: '70%'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { enabled: false } }
    }
  });
}

// ===== PRODUCTION FUNCTIONS =====
function toggleProductionView() {
  console.log('Toggling production view. Current:', isYearlyView);
  isYearlyView = !isYearlyView;
  
  const toggleLabel = document.getElementById('toggleLabel');
  if (toggleLabel) {
    toggleLabel.textContent = isYearlyView ? 'Yearly' : 'Monthly';
    console.log('Updated toggle label to:', toggleLabel.textContent);
  }
  
  updateProductionValues();
  createProductionChart();
  console.log('Production view toggled to:', isYearlyView ? 'Yearly' : 'Monthly');
}

function updateProductionValues() {
  const data = isYearlyView ? dashboardData.production.yearly : dashboardData.production.monthly;
  console.log('Updating production values with:', data);
  
  const elements = {
    'starline-value': data.Starline,
    'skyline-value': data.Skyline,
    'skylinepro-value': data['Skyline Pro'],
    'hd-value': data['HD Heavy Duty']
  };
  
  Object.entries(elements).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = value.toLocaleString();
    } else {
      console.warn('Production value element not found:', id);
    }
  });
}

// ===== QRQC STATS UPDATE =====
function updateQRQCStats() {
  Object.entries(dashboardData.qrqc).forEach(([category, data]) => {
    const closedEl = document.getElementById(`${category}Closed`);
    const openEl = document.getElementById(`${category}Open`);
    
    if (closedEl) closedEl.textContent = `${data.closed} Closed`;
    if (openEl) openEl.textContent = `${data.open} Open`;
  });
}

// ===== IMPROVEMENT FUNCTIONS =====
function updateImprovementHighlight() {
  const container = document.getElementById('improvementHighlight');
  if (!container) return;
  
  const improvements = dashboardData.improvements;
  container.innerHTML = '';
  
  improvements.slice(0, 2).forEach(improvement => {
    const item = document.createElement('div');
    item.className = 'improvement-item';
    item.innerHTML = `
      <div class="improvement-title">${improvement.title}</div>
      <div class="improvement-date">${formatDate(improvement.date)}</div>
    `;
    container.appendChild(item);
  });
}

// ===== MODAL FUNCTIONS =====
function showImprovements() {
  const modal = document.getElementById('improvementsModal');
  const body = document.getElementById('improvementsBody');
  
  if (!modal || !body) return;
  
  body.innerHTML = '';
  dashboardData.improvements.forEach(improvement => {
    const detail = document.createElement('div');
    detail.className = 'improvement-detail';
    detail.innerHTML = `
      <h3>${improvement.title}</h3>
      <div class="detail-item"><strong>Problem:</strong> ${improvement.problem}</div>
      <div class="detail-item"><strong>RCA:</strong> ${improvement.rca}</div>
      <div class="detail-item"><strong>ICA:</strong> ${improvement.ica}</div>
      <div class="detail-item"><strong>PCA:</strong> ${improvement.pca}</div>
      <div class="detail-item"><strong>Date:</strong> ${formatDate(improvement.date)}</div>
    `;
    body.appendChild(detail);
  });
  
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function showModelDetails(type, model, value) {
  const modal = document.getElementById('modelDetailsModal');
  const title = document.getElementById('modelModalTitle');
  const content = document.getElementById('modelDetailsContent');
  
  if (!modal || !title || !content) return;
  
  title.textContent = `${type} - ${model}`;
  
  const monthlyData = generateMonthlyData(model, type, value);
  
  content.innerHTML = `
    <div class="model-detail-section">
      <h3>Current Month Performance</h3>
      <div class="detail-value">
        <span class="detail-label">Current ${type}:</span>
        <span class="detail-number">${value}</span>
      </div>
    </div>
    <div class="model-detail-section">
      <h3>Monthly Trend (Last 6 Months)</h3>
      <div class="monthly-trend">
        ${monthlyData.map(month => `
          <div class="month-item">
            <span class="month-name">${month.month}</span>
            <span class="month-value trend-${month.trend}">${month.value}</span>
            <span class="trend-indicator trend-${month.trend}">
              ${month.trend === 'up' ? '↑' : month.trend === 'down' ? '↓' : '→'}
            </span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

function closeAllModals() {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    modal.style.display = 'none';
  });
  document.body.style.overflow = 'auto';
}

// ===== UTILITY FUNCTIONS =====
function updateMetaInfo() {
  const monthNames = {
    "2025-07": "July 2025",
    "2025-06": "June 2025", 
    "2025-05": "May 2025"
  };
  
  const currentMonthEl = document.getElementById('currentMonth');
  const lastUpdatedEl = document.getElementById('lastUpdated');
  
  if (currentMonthEl) {
    currentMonthEl.textContent = monthNames[currentSelectedMonth] || currentSelectedMonth;
  }
  
  if (lastUpdatedEl) {
    const now = new Date();
    lastUpdatedEl.textContent = `Last updated: ${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
  }
  
  // Update improvements
  updateImprovementHighlight();
  updateQRQCStats();
}

function generateMonthlyData(model, type, currentValue) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const data = [];
  
  for (let i = 0; i < 6; i++) {
    const month = months[i];
    let value, trend;
    
    if (type === 'DPV Score') {
      const baseValue = currentValue - (Math.random() * 0.5 - 0.25);
      value = Math.max(1.0, Math.min(5.0, baseValue)).toFixed(1);
      trend = Math.random() > 0.6 ? 'up' : Math.random() > 0.3 ? 'stable' : 'down';
    } else {
      const variation = Math.floor(Math.random() * 40) - 20;
      value = Math.max(50, currentValue + variation);
      trend = Math.random() > 0.6 ? 'up' : Math.random() > 0.3 ? 'stable' : 'down';
    }
    
    data.push({ month, value, trend });
  }
  
  return data;
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

// ===== GLOBAL FUNCTION EXPORTS =====
window.showImprovements = showImprovements;
window.showModelDetails = showModelDetails;
window.closeModal = closeModal;
window.toggleProductionView = toggleProductionView;
window.updateBeforeAfterSlider = updateBeforeAfterSlider;

console.log('VECV MIS Dashboard script loaded successfully');