CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."collections"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "colony_id" uuid NOT NULL, "amount" integer NOT NULL, "date" date NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("colony_id") REFERENCES "public"."colonies"("id") ON UPDATE cascade ON DELETE cascade, UNIQUE ("id"));
