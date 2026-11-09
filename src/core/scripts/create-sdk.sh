echo "...[REMOVING-OLD-SDK-VERSION]"

if [ -d "../sdk" ]; then
    echo "...[REMOVING-OLD-SDK-VERSION]"
    rm -rf ../sdk
    echo "...[REMOVED-OLD-SDK-VERSION]"
else
    echo "...[NO-EXISTING-SDK-TO-REMOVE]"
fi

echo "...[REMOVED-OLD-SDK-VERSION]"



echo "...[CREATING-DIRECTORY-FOR-SDK]"
echo " "

mkdir ../sdk

cd ../sdk 

mkdir auth account grant-tracker

echo "...[GENERATE-SDKS-PROCESSING]"
echo " "

echo "...[GENERATE-AUTH-SDK-PROCESSING]"
echo " "
openapi-generator generate -i https://www.infra-granttracker.livestocx.xyz/docs/auth-service-json -g typescript-axios -o ../sdk/auth 

echo " "
echo "...[GENERATE-AUTH-SDK-SUCCESS]"
echo " "

echo "...[GENERATE-ACCOUNT-SDK-PROCESSING]"
echo " "
openapi-generator generate -i https://www.infra-granttracker.livestocx.xyz/docs/account-service-json -g typescript-axios -o ../sdk/account 

echo " "
echo "...[GENERATE-ACCOUNT-SDK-SUCCESS]"
echo " "

echo "...[GENERATE-GRANT-TRACKER-SDK-PROCESSING]"
echo " "
openapi-generator generate -i https://www.infra-granttracker.livestocx.xyz/docs/grant-service-json -g typescript-axios -o ../sdk/grant-tracker 
echo " "
echo "...[GENERATE-GRANT-TRACKER-SDK-SUCCESS]"

echo " "
echo "...[GENERATE-SDKS-SUCCESSFUL]"