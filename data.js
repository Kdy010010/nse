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
    "when_this_sprite_clicked": {
      "block": {
        "message": "이 스프라이트가 클릭되었을 때",
        "colour": 120,
        "type": "hat"
      },
      "code": ""
    }
  },
  "actions": {
    "move_steps": {
      "block": {
        "message": "%1 만큼 움직이기",
        "args": [
          {
            "type": "input_value",
            "name": "STEPS"
          }
        ],
        "colour": 230
      },
      "code": "moveSprite(%STEPS%);"
    },
    "turn_right": {
      "block": {
        "message": "오른쪽으로 %1 도 회전하기",
        "args": [
          {
            "type": "input_value",
            "name": "DEGREES"
          }
        ],
        "colour": 60
      },
      "code": "rotateSprite(%DEGREES%);"
    },
    "say_message": {
      "block": {
        "message": "%1 말하기",
        "args": [
          {
            "type": "input_value",
            "name": "MESSAGE"
          }
        ],
        "colour": 160
      },
      "code": "sayMessage(%MESSAGE%);"
    },
    "wait_seconds": {
      "block": {
        "message": "%1 초 기다리기",
        "args": [
          {
            "type": "input_value",
            "name": "SECONDS"
          }
        ],
        "colour": 120
      },
      "code": "await waitSeconds(%SECONDS%);"
    }
  },
  "control": {
    "repeat_times": {
      "block": {
        "message": "%1 번 반복하기",
        "args": [
          {
            "type": "input_value",
            "name": "TIMES"
          }
        ],
        "colour": 20
      },
      "code": "for(let i=0; i<%TIMES%; i++) {\n%DO%\n}"
    }
  }
};
