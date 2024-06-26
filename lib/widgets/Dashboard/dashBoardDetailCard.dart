import 'package:flutter/material.dart';

class DashboardCard extends StatefulWidget {
  final String title;
  final String description;
  final String additionalText; // Third text input
  final String MainTitle;
  final Image image;
  final Function()? onTap;

  DashboardCard({
    Key? key,
    required this.title,
    required this.description,
    required this.additionalText,
    required this.image,
    required this.onTap,
    required this.MainTitle,
  }) : super(key: key);

  @override
  _DashboardCardState createState() => _DashboardCardState();
}

class _DashboardCardState extends State<DashboardCard> {
  final Color buttonColor = Colors.teal; // Teal color for the button

  Widget _buildImage() {
    return Container(
      width: 170,
      height: 170,
      decoration: BoxDecoration(
        border: Border.all(
          color: Colors.teal,
          width: 2,
        ),
        borderRadius: BorderRadius.circular(8.0),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          SizedBox(
            width: 125,
            height: 100,
            child: ClipRRect(
              borderRadius: BorderRadius.circular(6.0),
              child: widget.image,
            ),
          ),
          const SizedBox(
            height: 10.0,
          ),
          Text(
            widget.MainTitle,
            style: const TextStyle(
              color: Colors.teal,
              fontSize: 12.0,
              fontWeight: FontWeight.bold,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildText(String text) {
    return Text(
      text,
      textAlign: TextAlign.center,
      overflow: TextOverflow.ellipsis,
      style: const TextStyle(
        fontSize: 10,
        fontWeight: FontWeight.bold,
        color: Colors.black,
      ),
    );
  }

  Widget _buildViewDetailsButton() {
    return SizedBox(
      height: 30.0,
      width: 119.0,
      child: ElevatedButton(
        style: ElevatedButton.styleFrom(
          backgroundColor: buttonColor,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(8.0),
          ),
        ),
        onPressed: widget.onTap,
        child: const Text(
          'View Details',
          style: TextStyle(
            color: Colors.white,
            fontSize: 12,
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: MediaQuery.of(context).size.width *
          0.45, // Adjust the width for two cards side by side
      child: Card(
        color: Colors.white, // White background color for the card
        elevation: 7.0,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(15.0),
        ),
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              _buildImage(),
              const SizedBox(height: 8.0),
              Column(
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  _buildText(widget.title),
                  const SizedBox(height: 4.0),
                  _buildText(widget.description),
                  const SizedBox(height: 4.0),
                  _buildText(widget.additionalText),
                ],
              ),
              const SizedBox(height: 8.0),
              _buildViewDetailsButton(),
            ],
          ),
        ),
      ),
    );
  }
}

