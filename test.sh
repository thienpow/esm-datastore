



if test -z $1; then
  echo ""
else
  choice=$1
fi

while :; do

  if test -z "$choice"; then
    read -p "Rebuild: All(0), esmserver(1), admin(2), checker_current_game(3), checker_leaderboard(4), checker_subscriber(5), gloader(6), wwwloader(7)" choice
  fi
  
  if [ "$choice" -ge 0 ] && [ "$choice" -le 7 ]; then
    break
  else
    read -p "Rebuild: All(0), esmserver(1), admin(2), checker_current_game(3), checker_leaderboard(4), checker_subscriber(5), gloader(6), wwwloader(7)" choice
  fi

done

echo "$choice"

# ssh root@esm-api.aadi.my 'bash -s' < test_remote.sh $choice