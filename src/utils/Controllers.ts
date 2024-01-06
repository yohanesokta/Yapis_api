import SignControl from "../components/SignControl";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
class Controller {
    home(res) {
        res.send("Is Working");
    }
    sign(req) {
        return SignControl(req);
    }
    async get() {
        try {
            return await prisma.akunuser.findMany();
        } catch (error) {
            console.log(error);
        } finally {
            await prisma.$disconnect;
        }
    }
}

export default Controller;