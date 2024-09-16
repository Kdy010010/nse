// data.js
const data = {
  "events": {
    "when_started": {
      "block": {
        "message": "시작했을 때",
        "colour": 120,
        "type": "hat"
      },
      "code": ""
    },
    "when_clicked": {
      "block": {
        "message": "눌렸을 때",
        "colour": 120,
        "type": "hat"
      },
      "code": ""
    }
  },
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
    },
    "say_message": {
      "block": {
        "message": "메시지 말하기 %1",
        "args": [
          {
            "type": "input_value",
            "name": "MESSAGE"
          }
        ],
        "colour": 290
      },
      "code": "sayMessage(%MESSAGE%);"
    }
  }
};
