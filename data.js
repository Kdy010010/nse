// data.js
const data = {
  "events": {
    "when_started": {
      "block": {
        "message": "시작했을 때",
        "colour": 120
      },
      "code": ""
    },
    "when_this_sprite_clicked": {
      "block": {
        "message": "이 스프라이트가 클릭되었을 때",
        "colour": 120
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
            "name": "STEPS",
            "check": "Number"
          }
        ],
        "colour": 230
      },
      "code": "await moveSprite(%STEPS%);"
    },
    "turn_right": {
      "block": {
        "message": "오른쪽으로 %1 도 회전하기",
        "args": [
          {
            "type": "input_value",
            "name": "DEGREES",
            "check": "Number"
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
            "name": "MESSAGE",
            "check": "String"
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
            "name": "SECONDS",
            "check": "Number"
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
        "message": "%1 번 반복하기 %2",
        "args": [
          {
            "type": "input_value",
            "name": "TIMES",
            "check": "Number"
          },
          {
            "type": "input_statement",
            "name": "DO"
          }
        ],
        "colour": 20
      },
      "code": "for(let i=0; i<%TIMES%; i++) {\n%DO%\n}"
    }
  }
};
