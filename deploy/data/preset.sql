
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
1	Weekly
2	Monthly
3	3 Months
4	6 Months
5	1 Year
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
