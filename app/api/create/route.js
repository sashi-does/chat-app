import { StreamChat } from "stream-chat"

const api_key = "r2x2quvw2zkc";
const api_secret = "s4sqs38hq7w79f9q5ba4u6xsnwxdme44ykrtavx9aytad8pf5avtq7sxwykw23yx";
const user_id = "user_2rZSnu8Q91QceQgqXlWnQWsE5l3";

export async function GET() {
    const serverClient = StreamChat.getInstance(api_key, api_secret);

    const token = serverClient.createToken(user_id);
    console.log(`token ${token}`)
    return Response.json({ message: token })
  }