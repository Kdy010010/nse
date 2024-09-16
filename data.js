// data.js
const data = {
  "actions": {
    "move_right": {
      "block": {
        "message": "X축 오른쪽으로 이동",
        "colour": 230
      },
      "code": "moveSpriteX(10);"
    },
    "move_left": {
      "block": {
        "message": "X축 왼쪽으로 이동",
        "colour": 230
      },
      "code": "moveSpriteX(-10);"
    },
    "move_up": {
      "block": {
        "message": "Y축 위로 이동",
        "colour": 180
      },
      "code": "moveSpriteY(-10);"
    },
    "move_down": {
      "block": {
        "message": "Y축 아래로 이동",
        "colour": 180
      },
      "code": "moveSpriteY(10);"
    },
    "change_shape": {
      "block": {
        "message": "모양 변경",
        "colour": 160
      },
      "code": "changeSpriteShape();"
    }
  }
};
