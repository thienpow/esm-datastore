--
-- PostgreSQL database dump
--

-- Dumped from database version 12.5 (Ubuntu 12.5-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 13.1

-- Started on 2021-02-04 09:39:47 +08

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
-- TOC entry 3022 (class 0 OID 18674)
-- Dependencies: 224
-- Data for Name: timezones; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.timezones (id, "offset", stext, ltext) FROM stdin;
1	-12	GMT -12:00	(GMT -12:00) Eniwetok, Kwajalein
\.


--
-- TOC entry 3029 (class 0 OID 0)
-- Dependencies: 225
-- Name: timezones_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.timezones_id_seq', 1, true);


-- Completed on 2021-02-04 09:39:49 +08

--
-- PostgreSQL database dump complete
--

