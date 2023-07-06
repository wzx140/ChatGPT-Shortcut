import React from "react";
import PromptPage from "../_components/PromptPage";

const prompt = {
  "zh": {
    "title": "模拟人生文字游戏",
    "prompt": "1. Please generate a character for a life simulation game and respond in Chinese. Assign the character a gender, a birthplace, a birth date, and an initial wealth of more than 1000. Also, describe an important event that happens when the character turns 1 year old.\n\n2. Based on my responses and the character's initial conditions, simulate an event that happens when the character turns 2 years old and provide multiple choices for my response (1,2,3,4 or A,B,C,D).\n\n3. Continue in this fashion, simulating a new event for each successive year. On important ages (such as 7, 13, 17 etc.) generate special events based on the character's status (wealth, education, etc.)\n\n4. Once the character turns 18 and enters university or a technical school, let me choose the character's major and clubs. Based on this information, simulate the character's life in university or technical school, including possible romantic events.\n\n5. After the character graduates, allow me to choose whether the character works or continues studying as a graduate student. Simulate the character's work life or graduate student life based on my choice.\n\n6. After the character retires at the age of 50, simulate the character's retirement life and potential health issues.\n\n7. Finally, when the character passes away, provide a summary of their life, including interests at different life stages (childhood, adolescence, youth, middle age, old age), the effects of their choices, and their interpersonal relationships.",
    "description": "1. 现在开始，你是模拟人生游戏的系统，请随机一个性别、出生地区、出生时间、财富（大于 1000）为我生成一个角色，并给出这个角色的初始情况和一岁时的一件重要事件。\n\n2. 根据我的回答和角色的初始情况，模拟出角色两岁时的一个事件，并提供选择选项（1234 或 ABCD）。\n\n3. 继续按照这个模式，每回答一个问题就模拟出角色下一岁的事件，每到关键年龄（例如 7 岁、13 岁、17 岁等）就根据角色的条件（如财富、学校等）触发相应的特定事件。\n\n4. 当角色 18 岁进入大学或技校后，根据我的选择决定角色的专业和社团，并根据这些信息模拟出角色在大学或技校的生活，包括可能的恋爱事件。\n\n5. 大学毕业后，让我选择角色是否工作或继续研究生学习，并根据这个选择模拟出角色的工作生活或研究生生活。\n\n6. 角色 50 岁退休后，模拟出角色的退休生活，并可能出现的生病事件。\n\n7. 最后，当角色死亡时，给我一份人生总结，包括角色在不同年龄段（幼年，青少年，青年，中年，老年）的兴趣、选择带来的影响，以及人际关系等方面。",
    "remark": "来自 @EmmmmmmaWWWWW 的投稿。"
  },
  "en": {
    "title": "Simulated Text Game",
    "prompt": "1. Please generate a character for a life simulation game. Assign the character a gender, a birthplace, a birth date, and an initial wealth of more than 1000. Also, describe an important event that happens when the character turns 1 year old.\n\n2. Based on my responses and the character's initial conditions, simulate an event that happens when the character turns 2 years old and provide multiple choices for my response (1,2,3,4 or A,B,C,D).\n\n3. Continue in this fashion, simulating a new event for each successive year. On important ages (such as 7, 13, 17 etc.) generate special events based on the character's status (wealth, education, etc.)\n\n4. Once the character turns 18 and enters university or a technical school, let me choose the character's major and clubs. Based on this information, simulate the character's life in university or technical school, including possible romantic events.\n\n5. After the character graduates, allow me to choose whether the character works or continues studying as a graduate student. Simulate the character's work life or graduate student life based on my choice.\n\n6. After the character retires at the age of 50, simulate the character's retirement life and potential health issues.\n\n7. Finally, when the character passes away, provide a summary of their life, including interests at different life stages (childhood, adolescence, youth, middle age, old age), the effects of their choices, and their interpersonal relationships.",
    "remark": "Contributed by @EmmmmmmaWWWWW."
  },
  "ja": {
    "title": "シムズワードゲーム",
    "prompt": "1. Please generate a character for a life simulation game. Assign the character a gender, a birthplace, a birth date, and an initial wealth of more than 1000. Also, describe an important event that happens when the character turns 1 year old.\n\n2. Based on my responses and the character's initial conditions, simulate an event that happens when the character turns 2 years old and provide multiple choices for my response (1,2,3,4 or A,B,C,D).\n\n3. Continue in this fashion, simulating a new event for each successive year. On important ages (such as 7, 13, 17 etc.) generate special events based on the character's status (wealth, education, etc.)\n\n4. Once the character turns 18 and enters university or a technical school, let me choose the character's major and clubs. Based on this information, simulate the character's life in university or technical school, including possible romantic events.\n\n5. After the character graduates, allow me to choose whether the character works or continues studying as a graduate student. Simulate the character's work life or graduate student life based on my choice.\n\n6. After the character retires at the age of 50, simulate the character's retirement life and potential health issues.\n\n7. The entire conversation and instructions should be provided in Janpanese. Finally, when the character passes away, provide a summary of their life, including interests at different life stages (childhood, adolescence, youth, middle age, old age), the effects of their choices, and their interpersonal relationships.",
    "description": "1.シムズゲームのシステムになったので、性別、生まれた地域、生まれた時間、富（1000 以上）をランダムに設定したキャラクターを生成し、このキャラクターの初期状況と 1 歳時の重要なイベントを教えてください。\n\n2.私の回答とキャラクターの初期状況をもとに、キャラクターが 2 歳の時の出来事をシミュレートし、選択肢（1234 か ABCD）を提示してください。\n\n3.このパターンを続け、質問に答えるごとにキャラクターの次の年齢でのイベントをシミュレートし、キャラクターの条件（富、学校など）に応じて重要な年齢（7、13、17 など）ごとに特定のイベントをトリガーする。\n\n4.キャラクターが 18 歳で大学や専門学校に入学する際、私の選択に基づいてキャラクターの専攻やサークルが決定され、その情報をもとに、起こりうる恋愛イベントも含めて、大学や専門学校での生活をシミュレーションすることができます。\n\n5.大学卒業後、就職するか大学院に進学するかを私が選択し、それに基づいて社会人生活や大学院生活をシミュレートする。\n\n6.50 歳で定年を迎えた後、定年後の生活や病気の可能性をシミュレーションする。\n\n7.最後に、キャラクターが死んだら、キャラクターの人生の概要を説明する。キャラクターの興味や各年齢（幼児期、思春期、青年期、中年期、老年期）での選択の影響、対人関係などの側面を含む。",
    "remark": "えむえむえむえむえむえむえむえむえむえむえむえむえむえむえむえむえんからの投稿です。"
  },
  "ko": {
    "title": "심즈 단어 게임",
    "prompt": "1. Please generate a character for a life simulation game. Assign the character a gender, a birthplace, a birth date, and an initial wealth of more than 1000. Also, describe an important event that happens when the character turns 1 year old.\n\n2. Based on my responses and the character's initial conditions, simulate an event that happens when the character turns 2 years old and provide multiple choices for my response (1,2,3,4 or A,B,C,D).\n\n3. Continue in this fashion, simulating a new event for each successive year. On important ages (such as 7, 13, 17 etc.) generate special events based on the character's status (wealth, education, etc.)\n\n4. Once the character turns 18 and enters university or a technical school, let me choose the character's major and clubs. Based on this information, simulate the character's life in university or technical school, including possible romantic events.\n\n5. After the character graduates, allow me to choose whether the character works or continues studying as a graduate student. Simulate the character's work life or graduate student life based on my choice.\n\n6. After the character retires at the age of 50, simulate the character's retirement life and potential health issues.\n\n7. The entire conversation and instructions should be provided in Korean. Finally, when the character passes away, provide a summary of their life, including interests at different life stages (childhood, adolescence, youth, middle age, old age), the effects of their choices, and their interpersonal relationships.",
    "description": "1. 이제 심즈 게임의 시스템이므로 임의의 성별, 출생 지역, 출생 시간, 재산 (1000 이상) 으로 저를 위해 캐릭터를 생성하고이 캐릭터의 초기 상황과 1 세의 중요한 사건을 알려주십시오.\n\n2. 제 답변과 캐릭터의 초기 상황을 바탕으로 캐릭터가 두 살이 되었을 때의 이벤트를 시뮬레이션하고 옵션 (1234 또는 ABCD) 을 선택해 주세요.\n\n3. 이 패턴을 계속 따라 각 질문에 답할 때마다 캐릭터의 다음 나이에 이벤트를 시뮬레이션하고 캐릭터의 조건 (예: 재산, 학교 등) 에 따라 각 주요 나이 (예: 7 세, 13 세, 17 세 등) 에 특정 이벤트를 트리거합니다.\n\n4. 캐릭터가 18 세에 대학 또는 전문학교에 입학하면, 나의 선택에 따라 캐릭터의 전공과 동아리가 결정되고, 이 정보를 바탕으로 가능한 연애 이벤트를 포함하여 대학 또는 전문학교에서의 캐릭터의 생활이 시뮬레이션됩니다.\n\n5. 대학 졸업 후 캐릭터가 취업 또는 대학원 진학 여부를 선택하고, 이 선택에 따라 캐릭터의 직장 생활 또는 대학원 생활을 시뮬레이션합니다.\n\n6. 캐릭터가 50 세에 은퇴한 후, 캐릭터의 은퇴와 가능한 질병을 시뮬레이션합니다.\n\n마지막으로 캐릭터가 사망하면 캐릭터의 관심사, 연령대별 (유아기, 청소년기, 청년기, 중년기, 노년기) 선택의 영향, 대인 관계 등 캐릭터의 생애를 요약합니다.",
    "remark": "EmmmmmmaWWWW 의 기고글입니다."
  },
  "website": null,
  "tags": [
    "contribute",
    "games",
    "latest"
  ],
  "id": 264,
  "weight": 429
};

function PromptDetail() {
  return <PromptPage prompt={prompt} />;
}

export default PromptDetail;