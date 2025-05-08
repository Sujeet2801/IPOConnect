-- CreateTable
CREATE TABLE "Sector" (
    "id" TEXT NOT NULL,
    "sectorName" TEXT NOT NULL,
    "sectorDesc" TEXT NOT NULL,
    "marketCaps" JSONB NOT NULL,
    "marketInsights" JSONB NOT NULL,
    "opportunities" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Sector_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Sector_sectorName_key" ON "Sector"("sectorName");
