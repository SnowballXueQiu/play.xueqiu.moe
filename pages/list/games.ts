export interface Game {
  id: string
  title: string
  description: string
  heat: number
}

export const games: Game[] = [
  {
    id: '1',
    title: '2048',
    description: '经典数字益智游戏',
    heat: 5
  },
  {
    id: '2',
    title: '贪吃蛇',
    description: '永不过时的休闲游戏',
    heat: 4
  },
  {
    id: '3',
    title: '俄罗斯方块',
    description: '考验反应能力的方块游戏',
    heat: 3
  }
]