CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."colonies"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "bees" integer DEFAULT null, "hives" integer DEFAULT null, PRIMARY KEY ("id") , UNIQUE ("id"));
