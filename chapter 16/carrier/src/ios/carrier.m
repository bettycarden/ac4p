#import "carrier.h"
#import <CoreTelephony/CTTelephonyNetworkInfo.h>
#import <CoreTelephony/CTCarrier.h>

@implementation carrier

- (void)getCarrierName:(CDVInvokedUrlCommand*)command
{
    CTTelephonyNetworkInfo *netinfo = [[CTTelephonyNetworkInfo alloc] init];
    CTCarrier *carrier = [netinfo subscriberCellularProvider];
    CDVPluginResult* result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:[carrier carrierName]];
    [self.commandDelegate sendPluginResult:result callbackId:[command callbackId]];
}

- (void)getCountryCode:(CDVInvokedUrlCommand*)command
{
    CTTelephonyNetworkInfo *netinfo = [[CTTelephonyNetworkInfo alloc] init];
    CTCarrier *carrier = [netinfo subscriberCellularProvider];
    CDVPluginResult* result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:[carrier isoCountryCode]];
    [self.commandDelegate sendPluginResult:result callbackId:[command callbackId]];
}

@end