#!/bin/bash
set -eo pipefail

host="$(hostname -i || echo '127.0.0.1')"
user="${POSTGRES_USER:-postgres}"
db="${POSTGRES_DB:-$POSTGRES_USER}"
export PGPASSWORD="${POSTGRES_PASSWORD:-}"

psql -v ON_ERROR_STOP=1 -U "$user" -h "$host" -d "$db" -c 'SELECT 1' >/dev/null 2>&1 || exit 1
