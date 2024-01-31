import 'package:flutter/material.dart';

class CustomizableCard {
  // Properties
  Widget? topWidget;
  Widget? bottomWidget;
  Widget? leftWidget;
  Widget? rightWidget;
  bool useDivider;
  EdgeInsetsGeometry padding;
  BorderRadiusGeometry borderRadius;
  double elevation;

  // Constructor with named optional parameters
  CustomizableCard({
    this.topWidget,
    this.bottomWidget,
    this.leftWidget,
    this.rightWidget,
    this.useDivider = false,
    this.padding = const EdgeInsets.all(8.0),
    this.borderRadius = const BorderRadius.all(Radius.circular(4.0)),
    this.elevation = 1.0,
  });

  // Main build method
  Widget build() {
    List<Widget> columnChildren = [];
    List<Widget> rowChildren = [];

    // Add top widget if exists
    if (topWidget != null) {
      columnChildren.add(topWidget!);
    }

    // Add left and right widgets in a row
    if (leftWidget != null || rightWidget != null) {
      rowChildren.add(leftWidget ?? Container());
      if (bottomWidget != null) {
        rowChildren.add(Expanded(child: bottomWidget!));
      }
      rowChildren.add(rightWidget ?? Container());
      columnChildren.add(Row(children: rowChildren));
    }

    // Add bottom widget if exists
    if (bottomWidget != null && leftWidget == null && rightWidget == null) {
      columnChildren.add(bottomWidget!);
    }

    // Add divider if needed
    if (useDivider && columnChildren.isNotEmpty) {
      columnChildren.insert(1, Divider());
    }

    return Card(
      elevation: elevation,
      shape: RoundedRectangleBorder(borderRadius: borderRadius),
      child: Padding(
        padding: padding,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: columnChildren,
        ),
      ),
    );
  }
}
