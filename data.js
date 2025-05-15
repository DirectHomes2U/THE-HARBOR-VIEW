var APP_DATA = {
  "scenes": [
    {
      "id": "1-EXTERIOR",
      "name": "1-EXTERIOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": -0.6879181110136106,
          "pitch": 0.054563165854705886,
          "rotation": 0,
          "target": "2-EXTERIOR 2"
        },
        {
          "yaw": -0.13757161037583643,
          "pitch": 0.14772532769763203,
          "rotation": 0,
          "target": "3-LIVING ROOM"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-EXTERIOR 2",
      "name": "2-EXTERIOR 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.05713322638551155,
          "pitch": 0.10071102708741009,
          "rotation": 0,
          "target": "3-LIVING ROOM"
        },
        {
          "yaw": 0.3876701177463353,
          "pitch": 0.10466259710729808,
          "rotation": 0,
          "target": "1-EXTERIOR"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-LIVING ROOM",
      "name": "3-LIVING ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9864911057127177,
          "pitch": 0.29740925160670173,
          "rotation": 0,
          "target": "2-EXTERIOR 2"
        },
        {
          "yaw": 0.12153472677250576,
          "pitch": 0.26803246947095083,
          "rotation": 0,
          "target": "4-KITCHEN"
        },
        {
          "yaw": -0.05727217761382519,
          "pitch": -0.31854702121727385,
          "rotation": 0,
          "target": "8-LOFT"
        },
        {
          "yaw": 0.9571542689724026,
          "pitch": 0.2618271968749575,
          "rotation": 0,
          "target": "1-EXTERIOR"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-KITCHEN",
      "name": "4-KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.025936781800444564,
          "pitch": 0.14445678553142116,
          "rotation": 0,
          "target": "6-BEDROOM"
        },
        {
          "yaw": -0.2387209732478528,
          "pitch": 0.29715635271778496,
          "rotation": 0,
          "target": "5-BATHROOM"
        },
        {
          "yaw": -2.831985022434935,
          "pitch": 0.37010729221183425,
          "rotation": 0,
          "target": "3-LIVING ROOM"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-BATHROOM",
      "name": "5-BATHROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.978795101765469,
          "pitch": 0.44943793840860735,
          "rotation": 0,
          "target": "4-KITCHEN"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-BEDROOM",
      "name": "6-BEDROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8954441300090146,
          "pitch": 0.3077061320962837,
          "rotation": 0,
          "target": "4-KITCHEN"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-LOFT BEDROOM",
      "name": "7-LOFT BEDROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9733568297774564,
          "pitch": 0.1314696057596123,
          "rotation": 0,
          "target": "8-LOFT"
        },
        {
          "yaw": 2.330237885386948,
          "pitch": 1.0397143215659987,
          "rotation": 0,
          "target": "4-KITCHEN"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-LOFT",
      "name": "8-LOFT",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.128675913789891,
          "pitch": 0.1324635422022702,
          "rotation": 0,
          "target": "7-LOFT BEDROOM"
        },
        {
          "yaw": 0.07249726206138973,
          "pitch": 0.5637036549481955,
          "rotation": 0,
          "target": "3-LIVING ROOM"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
