-- CreateTable
CREATE TABLE "SharkInvestor" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "sharkName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "netWorth" TEXT NOT NULL,
    "portfolio" TEXT NOT NULL,
    "sectorFocus" JSONB NOT NULL,
    "stageFocus" JSONB NOT NULL,
    "notableInvestments" JSONB NOT NULL,
    "achievements" JSONB NOT NULL,
    "smLink" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SharkInvestor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SharkInvestor_sharkName_key" ON "SharkInvestor"("sharkName");
