echo "...[REBUILDING-SDKS-PROCESSING]"
echo " "
echo " "
echo " "

echo "...[REBUILDING-AUTH-SDK-PROCESSING]"
echo " "
openapi-generator generate -i https://www.infra-granttracker.livestocx.xyz/docs/auth-service-json -g typescript-axios -o ../sdk/auth 

echo " "
echo "...[REBUILDING-AUTH-SDK-SUCCESS]"
echo " "
echo " "
echo " "

echo "...[REBUILDING-ACCOUNT-SDK-PROCESSING]"
echo " "
openapi-generator generate -i https://www.infra-granttracker.livestocx.xyz/docs/account-service-json -g typescript-axios -o ../sdk/account 

echo " "
echo "...[REBUILDING-ACCOUNT-SDK-SUCCESS]"
echo " "
echo " "
echo " "

echo "...[REBUILDING-GRANT-TRACKER-SDK-PROCESSING]"
echo " "
openapi-generator generate -i https://www.infra-granttracker.livestocx.xyz/docs/grant-service-json -g typescript-axios -o ../sdk/grant-tracker 
echo " "
echo "...[REBUILDING-GRANT-TRACKER-SDK-SUCCESS]"
echo " "
echo " "
echo " "

echo " "
echo " "
echo " "
echo "...[REBUILDING-SDKS-SUCCESSFUL]"

echo " "
echo " "
echo " "
