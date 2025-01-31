export interface Game {
  label: string
  title: string
  description: string
  heat: number
}

export const games: Game[] = [
  {
    label: '2048',
    title: '2048',
    description: '经典数字益智游戏',
    heat: 5
  },
  {
    label: 'tower-blocks',
    title: '堆方块',
    description: '看看谁能堆得更高',
    heat: 4
  }
]