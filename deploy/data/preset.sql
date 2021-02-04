
--
-- public.config
--
COPY public.config (spinner, invites, games_per_ad, days_to_claim, id) FROM stdin;
{1,2,3}	5	8	30	1
\.


--
-- public.item_type
--
COPY public.item_type (id, title) FROM stdin;
0	Not Selected
1	Gem
\.


--
-- public.prize_type
--
COPY public.prize_type (id, title) FROM stdin;
0	Not Selected
4	Automated Entry
3	Time Sensitive
1	Featured
2	Premium
\.


--
-- public.status_type
--
COPY public.status_type (id, title) FROM stdin;
0	Not Selected
1	Draft
2	Published
3	Archived/Disabled
\.


--
-- public.subscription_type
--
COPY public.subscription_type (id, title) FROM stdin;
0	Not Selected
1	Day
2	Week
3	Month
4	Year
\.


--
-- public.winner_status_type
--
COPY public.winner_status_type (id, title) FROM stdin;
1	Unclaimed
2	Claimed
3	Delivered
4	Expired
\.


--
-- public.user
--
COPY public."user" (id, username, passhash, email, phone, firstname, lastname, created_on, last_login, role_id, status, gem_balance, social_link_fb, social_link_google, avatar_url, exp, full_name, country_code, address, city, state, zip_code, country, is_email_confirmed, is_notify_allowed, is_notify_new_reward, is_notify_new_tournament, is_notify_tour_ending, nick_name, spins_left, rank, gems, tickets, current_game_id, current_game_score, today_tickets) FROM stdin;
1	wukong	$argon2id$v=19$m=64,t=1,p=1$pb7+cdRKchBGWxfmx6nHinqmLY4ir5vc4+LSsPwbpDg$kwfH/p8iEmxcTjKqzyWs8sekvIns2Qt4vSvbS/Pxz9U	thienpow@gmail.com	0188888888	Black	Myth	2020-12-31 15:07:54.239332	2020-12-31 15:07:54.239332	1	1	0				0		0						f	f	f	f	f		0	0	0	0	0	0	0
\.


--
-- public.timezones
--
COPY public.timezones (offset, stext, ltext) FROM stdin;
-12	GMT -12:00	(GMT -12:00) Eniwetok, Kwajalein
-11	GMT -11:00	(GMT -11:00) Midway Island, Samoa
-10	GMT -10:00	(GMT -10:00) Hawaii
-9	GMT -9:00	(GMT -9:00) Alaska
-8	GMT -8:00	(GMT -8:00) Pacific Time (US & Canada)
-7	GMT -7:00	(GMT -7:00) Mountain Time (US & Canada)
-6	GMT -6:00	(GMT -6:00) Central Time (US & Canada), Mexico City
-5	GMT -5:00	(GMT -5:00) Eastern Time (US & Canada), Bogota, Lima
-4	GMT -4:00	(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz
-3.5	GMT -3:30	(GMT -3:30) Newfoundland
-3	GMT -3:00	(GMT -3:00) Brazil, Buenos Aires, Georgetown
-2	GMT -2:00	(GMT -2:00) Mid-Atlantic
-1	GMT -1:00	(GMT -1:00) Azores, Cape Verde Islands
0	GMT -0:00	(GMT) Western Europe Time, London, Lisbon, Casablanca
1	GMT +1:00	(GMT +1:00) Brussels, Copenhagen, Madrid, Paris
2	GMT +2:00	(GMT +2:00) Kaliningrad, South Africa
3	GMT +3:00	(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg
3.5	GMT +3:30	(GMT +3:30) Tehran
4	GMT +4:00	(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi
4.5	GMT +4:30	(GMT +4:30) Kabul
5	GMT +5:00	(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent
5.5	GMT +5:30	(GMT +5:30) Bombay, Calcutta, Madras, New Delhi
5.75	GMT +5:45	(GMT +5:45) Kathmandu
6	GMT +6:00	(GMT +6:00) Almaty, Dhaka, Colombo
7	GMT +7:00	(GMT +7:00) Bangkok, Hanoi, Jakarta
8	GMT +8:00	(GMT +8:00) Beijing, Perth, Singapore, Hong Kong
9	GMT +9:00	(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk
9.5	GMT +9:30	(GMT +9:30) Adelaide, Darwin
10	GMT +10:00	(GMT +10:00) Eastern Australia, Guam, Vladivostok
11	GMT +11:00 (GMT +11:00) Magadan, Solomon Islands, New Caledonia
12	GMT +12:00 (GMT +12:00) Auckland, Wellington, Fiji, Kamchatka
\.
