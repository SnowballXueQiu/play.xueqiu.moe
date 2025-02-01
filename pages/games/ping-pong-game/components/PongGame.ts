import { ref, onMounted } from 'vue';

export function usePongGame() {
  const canvas = ref<HTMLCanvasElement | null>(null);
  let canvasContext: CanvasRenderingContext2D | null = null;
  let ballX = 50;
  let ballY = 50;
  let ballSpeedX = 18;
  let ballSpeedY = 16;
  let player1Score = ref(0);
  let lives = ref(3);
  const WINNING_SCORE = 3;
  let showingWinScreen = false;
  let paddle1Y = 250;
  let paddle2Y = 250;
  const PADDLE_THICKNESS = 14;
  const PADDLE_HEIGHT = 130;

  const calculateMousePos = (evt: MouseEvent) => {
    if (!canvas.value) return { x: 0, y: 0 };
    const rect = canvas.value.getBoundingClientRect();
    const root = document.documentElement;
    const mouseX = evt.clientX - rect.left - root.scrollLeft;
    const mouseY = evt.clientY - rect.top - root.scrollTop;
    return {
      x: mouseX,
      y: mouseY
    };
  };

  const calculateTouchPos = (evt: TouchEvent) => {
    if (!canvas.value) return { x: 0, y: 0 };
    const rect = canvas.value.getBoundingClientRect();
    const root = document.documentElement;
    const touchX = evt.touches[0].clientX - rect.left - root.scrollLeft;
    const touchY = evt.touches[0].clientY - rect.top - root.scrollTop;
    return {
      x: touchX,
      y: touchY
    };
  };

  const handleMouseClick = () => {
    if (showingWinScreen) {
      player1Score.value = 0;
      lives.value = 3;
      showingWinScreen = false;
    }
  };

  const ballReset = () => {
    if (lives.value <= 0) {
      showingWinScreen = true;
    }
    ballSpeedX = -ballSpeedX;
    if (canvas.value) {
      ballX = canvas.value.width / 2;
      ballY = canvas.value.height / 2;
    }
  };

  const computerMovement = () => {
    const paddle2YCenter = paddle2Y + PADDLE_HEIGHT / 2;
    if (paddle2YCenter < ballY - 35) {
      paddle2Y += 60;
    } else if (paddle2YCenter > ballY + 35) {
      paddle2Y -= 60;
    }
  };

  const moveEverything = () => {
    if (showingWinScreen) {
      return;
    }
    computerMovement();
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if (!canvas.value) return;

    if (ballX < 0) {
      if (ballY > paddle1Y && ballY < paddle1Y + PADDLE_HEIGHT) {
        ballSpeedX = -ballSpeedX;
        player1Score.value++;
        const deltaY = ballY - (paddle1Y + PADDLE_HEIGHT / 2);
        ballSpeedY = deltaY * 0.35;
      } else {
        lives.value--;
        ballReset();
      }
    }
    if (ballX > canvas.value.width) {
      if (ballY > paddle2Y && ballY < paddle2Y + PADDLE_HEIGHT) {
        ballSpeedX = -ballSpeedX;
        const deltaY = ballY - (paddle2Y + PADDLE_HEIGHT / 2);
        ballSpeedY = deltaY * 0.35;
      } else {
        ballReset();
      }
    }
    if (ballY < 0) {
      ballSpeedY = -ballSpeedY;
    }
    if (ballY > canvas.value.height) {
      ballSpeedY = -ballSpeedY;
    }
  };

  const drawNet = () => {
    if (!canvas.value) return;
    for (let i = 0; i < canvas.value.height; i += 40) {
      colorRect(canvas.value.width / 2 - 1, i, 2, 20, 'white');
    }
  };

  const drawEverything = () => {
    if (!canvas.value || !canvasContext) return;
    colorRect(0, 0, canvas.value.width, canvas.value.height, '#213769');
    if (showingWinScreen) {
      canvasContext.fillStyle = 'white';
      canvasContext.textAlign = "center";
      canvasContext.font = "40px Arial";
      canvasContext.fillText("点击继续", canvas.value.width / 2, 500);
      return;
    }
    drawNet();
    canvasContext.globalAlpha = 1;
    colorRect(0, paddle1Y, PADDLE_THICKNESS, PADDLE_HEIGHT, 'white');
    colorRect(canvas.value.width - PADDLE_THICKNESS, paddle2Y, PADDLE_THICKNESS, PADDLE_HEIGHT, 'white');
    colorCircle(ballX, ballY, 10, 'white');
  };

  const colorCircle = (centerX: number, centerY: number, radius: number, drawColor: string) => {
    if (!canvasContext) return;
    canvasContext.fillStyle = drawColor;
    canvasContext.globalAlpha = 0.6;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
    canvasContext.fill();
  };

  const colorRect = (leftX: number, topY: number, width: number, height: number, drawColor: string) => {
    if (!canvasContext) return;
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX, topY, width, height);
  };

  onMounted(() => {
    canvas.value = document.getElementById('game') as HTMLCanvasElement;
    canvasContext = canvas.value.getContext('2d');
    canvas.value.width = window.innerWidth;
    canvas.value.height = window.innerHeight;

    const framesPerSecond = 30;
    setInterval(() => {
      moveEverything();
      drawEverything();
    }, 1000 / framesPerSecond);

    canvas.value.addEventListener('mousedown', handleMouseClick);
    canvas.value.addEventListener('mousemove', (evt) => {
      const mousePos = calculateMousePos(evt);
      paddle1Y = mousePos.y - PADDLE_HEIGHT / 2;
    });

    canvas.value.addEventListener('touchstart', handleMouseClick);
    canvas.value.addEventListener('touchmove', (evt) => {
      const touchPos = calculateTouchPos(evt);
      paddle1Y = touchPos.y - PADDLE_HEIGHT / 2;
    });

    window.addEventListener('resize', () => {
      if (canvas.value) {
        canvas.value.width = window.innerWidth;
        canvas.value.height = window.innerHeight;
      }
    });
  });

  return {
    canvas,
    player1Score,
    lives
  };
}