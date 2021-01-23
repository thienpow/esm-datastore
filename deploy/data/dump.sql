--
-- PostgreSQL database dump
--

-- Dumped from database version 12.5 (Ubuntu 12.5-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 13.1

-- Started on 2021-01-14 17:40:10 +08

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3006 (class 0 OID 16574)
-- Dependencies: 232
-- Data for Name: winner_status_type; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.winner_status_type (id, title) FROM stdin;
1	Unclaimed
2	Claimed
3	Delivered
4	Expired
\.


-- Completed on 2021-01-14 17:40:12 +08

--
-- PostgreSQL database dump complete
--

