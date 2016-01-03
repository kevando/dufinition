//
//  ReferenceLibraryManager.m
//  Dufine
//
//  Created by k on 12/27/15.
//  Copyright © 2015 Facebook. All rights reserved.
//

#import "ReferenceLibraryManager.h"
#import <UIKit/UIReferenceLibraryViewController.h>
#import "AppDelegate.h"

@implementation ReferenceLibraryManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(showDefinitionForTerm:(NSString*)term callback:(RCTResponseSenderBlock)callback)
{
  if (callback == nil)
    return;
  
  BOOL hasDefinition = NO;
  
  // string object
  NSString* someString = @"something";
  
  if ([UIReferenceLibraryViewController dictionaryHasDefinitionForTerm:term])
  {
    hasDefinition = YES;
    NSLog(@"Term: %@, has definition", term);
    initWithTerm:term
    
    dispatch_async(dispatch_get_main_queue(), ^{
      UIReferenceLibraryViewController *referenceLibraryVC = [[UIReferenceLibraryViewController alloc] initWithTerm:term];
      UIViewController *rootVC = ((AppDelegate*)[UIApplication sharedApplication].delegate).window.rootViewController;
      [rootVC presentViewController:referenceLibraryVC animated:YES completion:nil];
    });
  }
  
  callback(@[@(hasDefinition)]);
}

@end