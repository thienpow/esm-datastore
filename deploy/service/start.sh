#!/bin/bash

#export LISTEN_ON="0.0.0.0:50051"
export BEFORE_LOGIN_TOKEN="Bearer before-login-token"
export STRIPE_SECRET="sk_test_51IOa7gBGCaV2oEVpEDw9fOn1fUn8IaPOemu7Yjkg6N75C3ahsd7sEQr3ait4JYU55wfCBbXCRPIhcUxGMVtQYA6A003YKMqkYF"
export CHECKER_TIME_WAIT="60"
export FCM_KEY="AAAAzT8d8lM:APA91bHtFSHVIBiiSDUWSaUkrYNrcBSyhMY_JBYSeaaoWpkrxSgBO-7xgHtySH3qfTvsgHHTIsrh_SwwirCvTTuOWBl0--JhddEV8MFnEgWuGRPOXPVyTBHym5k9gh8WrCxr-rY13Y54"
. /usr/local/bin/common_env

# IMPORTANT! need to have at least one looping... do not put & at the last command
/usr/local/bin/checker_current_game & 
/usr/local/bin/checker_leaderboard & 
/usr/local/bin/checker_subscriber & 
/usr/local/bin/checker_unclaim &
/usr/local/bin/esmserver
