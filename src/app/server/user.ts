"use server"

import { users } from "../../db/schema";
import { db } from "../../db";

export async function insertOneUser(name: string, isDrugDealer: boolean, isDrugTrafficker: boolean) {
    await db.insert(users).values({name: name, isDrugDealer: isDrugDealer, isDrugTrafficker: isDrugTrafficker});
}