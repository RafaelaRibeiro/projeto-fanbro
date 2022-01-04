import { prisma } from "src/shared/infra/prisma/prisma";

export class ListFollowersUseCase {
  async execute(user_id: string) {
    const followers = await prisma.$queryRaw`SELECT 
users.id, users.name, users.username , u.path as u_path, b.path as b_path
FROM connections 
INNER JOIN users ON connections.user_id = users.id 
INNER JOIN images u ON u.user_id = connections.user_id AND u.type = 'U'
INNER JOIN images b ON b.user_id = connections.user_id AND b.type = 'B'

WHERE
connections.following_id = ${Number(user_id)}`;

    return { followers };
  }
}
