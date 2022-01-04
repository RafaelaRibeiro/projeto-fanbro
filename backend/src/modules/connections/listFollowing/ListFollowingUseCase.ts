import { prisma } from "src/shared/infra/prisma/prisma";

export class ListFollowingUseCase {
  async execute(user_id: string) {
    const following = await prisma.$queryRaw`SELECT 
users.id, users.name, users.username , u.path as u_path, b.path as b_path
FROM connections 
INNER JOIN users ON connections.following_id = users.id 
INNER JOIN images u ON u.user_id = connections.following_id AND u.type = 'U'
INNER JOIN images b ON b.user_id = connections.following_id AND b.type = 'B'

WHERE
connections.user_id = ${Number(user_id)}`;

    return { following };
  }
}
