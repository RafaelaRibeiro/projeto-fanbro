import { prisma } from "src/shared/infra/prisma/prisma";

export class ListProfileUseCase {
  async execute(id: string) {
    const profile = await prisma.$queryRaw`
      SELECT users.id, users.username, users.email, users.name, users.about_me, users.facebook, users.twitter, users.spotify, users.tumblr, users.created_at, updated_at, deleted_at, birthed_at, b.path AS image_banner, u.path AS image_user 
      FROM users 
      LEFT JOIN images b ON users.id = b.user_id AND b.type= 'B'
      LEFT JOIN images u ON users.id = u.user_id AND u.type = 'U'
      WHERE users.id = ${Number(id)} `;

    return profile;
  }
}
