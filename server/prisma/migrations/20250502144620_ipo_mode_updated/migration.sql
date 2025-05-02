-- CreateEnum
CREATE TYPE "IpoStatus" AS ENUM ('UPCOMING', 'ONGOING', 'LISTED');

-- CreateTable
CREATE TABLE "Ipo" (
    "id" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "priceBand" TEXT NOT NULL,
    "openDate" TIMESTAMP(3) NOT NULL,
    "closeDate" TIMESTAMP(3) NOT NULL,
    "issueSize" TEXT NOT NULL,
    "issueType" TEXT NOT NULL,
    "listingDate" TIMESTAMP(3) NOT NULL,
    "status" "IpoStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ipo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ipo_companyName_key" ON "Ipo"("companyName");
