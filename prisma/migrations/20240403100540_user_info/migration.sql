/*
  Warnings:

  - Added the required column `email` to the `userInfo` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_userInfo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userName" TEXT NOT NULL,
    "passWord" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "Phone" TEXT,
    "wxId" TEXT
);
INSERT INTO "new_userInfo" ("Phone", "id", "passWord", "userName", "wxId") SELECT "Phone", "id", "passWord", "userName", "wxId" FROM "userInfo";
DROP TABLE "userInfo";
ALTER TABLE "new_userInfo" RENAME TO "userInfo";
CREATE UNIQUE INDEX "userInfo_userName_key" ON "userInfo"("userName");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
