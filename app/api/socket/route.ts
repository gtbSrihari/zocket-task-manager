import { Server } from 'socket.io';

export async function GET(req: Request, res: Response) {
  const io = new Server(3000, { cors: { origin: '*' } });
  io.on('connection', (socket) => {
    console.log('Client connected');
    socket.emit('taskUpdate', { id: 2, title: 'New Task', status: 'Pending' });
  });
  return new Response('Socket server started', { status: 200 });
}