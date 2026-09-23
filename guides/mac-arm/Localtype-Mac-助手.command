#!/bin/bash
set -e
/usr/bin/xattr -dr com.apple.quarantine "/Applications/Localtype.app" && /usr/bin/open "/Applications/Localtype.app"
