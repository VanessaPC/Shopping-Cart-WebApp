#!/bin/bash

# This way you can customize which branches should be skipped when
# prepending commit message.
# if [ -z "$BRANCHES_TO_SKIP" ]; then
#   BRANCHES_TO_SKIP=(master)
# fi

BRANCH_NAME=$(git symbolic-ref --short HEAD)
TASK_ID=$(echo $BRANCH_NAME | grep -o -E "[A-Z]+-[0-9]+" | head -n1)
BRANCH_NAME="${BRANCH_NAME##*/}"

BRANCH_EXCLUDED=$(printf "%s\n" "${BRANCHES_TO_SKIP[@]}" | grep -c "^$BRANCH_NAME$")
TASK_ID_IN_COMMIT=$(grep -c "$TASK_ID" $1)
echo "$TASK_ID"

if [ -n "$TASK_ID" ] && ! [[ $BRANCH_EXCLUDED -eq 1 ]] && ! [[ $TASK_ID_IN_COMMIT -ge 1 ]]; then
  sed -i .bak -e "1s/^/[$TASK_ID] /" $1
  echo "[$TASK_ID] $(cat $1)" > $1
fi
