-- CreateTable
CREATE TABLE "Broker" (
    "id" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "companyLogo" TEXT NOT NULL,
    "ratings" DOUBLE PRECISION NOT NULL,
    "reviews" DOUBLE PRECISION NOT NULL,
    "accounts" TEXT NOT NULL,
    "openAccLink" TEXT NOT NULL,
    "learnMore" TEXT NOT NULL,
    "tradingCategory" TEXT[],
    "accOpenCharge" TEXT NOT NULL,
    "maintainanceCharge" TEXT NOT NULL,
    "deliveryCharge" TEXT NOT NULL,
    "intradayBrokerage" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Broker_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Broker_companyName_key" ON "Broker"("companyName");
